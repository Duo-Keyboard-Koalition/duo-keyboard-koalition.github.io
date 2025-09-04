/*
  # Complete Project Setup Migration
  
  This migration ensures:
  1. All tables exist with proper structure
  2. Project contributors many-to-many relationship is set up
  3. All existing projects are assigned to Darcy Liu (0fb1e9c3-2afe-4c64-a918-2032f8853f99)
  4. Sample projects are created if none exist
  5. All RLS policies are properly configured
*/

-- Ensure project_contributors table exists (from previous migration)
CREATE TABLE IF NOT EXISTS project_contributors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES user_projects(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role text CHECK (role IN ('owner', 'contributor', 'viewer')) DEFAULT 'contributor',
  contribution_type text[] DEFAULT '{}',
  joined_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  UNIQUE(project_id, user_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_project_contributors_project_id ON project_contributors(project_id);
CREATE INDEX IF NOT EXISTS idx_project_contributors_user_id ON project_contributors(user_id);
CREATE INDEX IF NOT EXISTS idx_project_contributors_role ON project_contributors(role);

-- Enable Row Level Security
ALTER TABLE project_contributors ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they're correct
DROP POLICY IF EXISTS "Users can view contributors of projects they have access to" ON project_contributors;
DROP POLICY IF EXISTS "Project owners can manage contributors" ON project_contributors;
DROP POLICY IF EXISTS "Users can update their own contributor record" ON project_contributors;

-- RLS Policies for project_contributors
CREATE POLICY "Users can view contributors of projects they have access to"
  ON project_contributors
  FOR SELECT
  TO authenticated
  USING (
    -- User is a contributor to this project
    user_id = auth.uid()
    OR
    -- User is a contributor to this project (through the junction table)
    project_id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND is_active = true
    )
    OR
    -- User is connected to a contributor and can view through connections
    project_id IN (
      SELECT pc.project_id FROM project_contributors pc
      JOIN user_connections uc ON (
        (uc.user_id = auth.uid() AND uc.connected_user_id = pc.user_id) OR
        (uc.connected_user_id = auth.uid() AND uc.user_id = pc.user_id)
      )
      WHERE uc.status = 'accepted' AND pc.is_active = true
    )
  );

CREATE POLICY "Project owners can manage contributors"
  ON project_contributors
  FOR ALL
  TO authenticated
  USING (
    project_id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND role = 'owner' AND is_active = true
    )
  )
  WITH CHECK (
    project_id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND role = 'owner' AND is_active = true
    )
  );

CREATE POLICY "Users can update their own contributor record"
  ON project_contributors
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Update user_projects policies to work with new contributor system
DROP POLICY IF EXISTS "Users can manage their own projects" ON user_projects;
DROP POLICY IF EXISTS "Users can view connected users' projects" ON user_projects;
DROP POLICY IF EXISTS "Contributors can view projects they're part of" ON user_projects;
DROP POLICY IF EXISTS "Project owners can manage projects" ON user_projects;

-- New policies for user_projects that work with contributors
CREATE POLICY "Contributors can view projects they're part of"
  ON user_projects
  FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND is_active = true
    )
    OR
    -- Still allow viewing connected users' projects through connections
    user_id IN (
      SELECT connected_user_id FROM user_connections 
      WHERE user_id = auth.uid() AND status = 'accepted'
    )
    OR
    user_id IN (
      SELECT user_id FROM user_connections 
      WHERE connected_user_id = auth.uid() AND status = 'accepted'
    )
  );

CREATE POLICY "Project owners can manage projects"
  ON user_projects
  FOR ALL
  TO authenticated
  USING (
    id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND role = 'owner' AND is_active = true
    )
  )
  WITH CHECK (
    id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND role = 'owner' AND is_active = true
    )
  );

-- Assign all existing projects to Darcy Liu
UPDATE user_projects 
SET user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid
WHERE user_id != '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid;

-- Clear any existing contributor records to avoid conflicts
DELETE FROM project_contributors;

-- Add Darcy Liu as owner of ALL existing projects
INSERT INTO project_contributors (project_id, user_id, role, contribution_type, is_active)
SELECT 
  id as project_id,
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid as user_id,
  'owner' as role,
  ARRAY['creator'] as contribution_type,
  true as is_active
FROM user_projects
ON CONFLICT (project_id, user_id) DO NOTHING;

-- Create sample projects if no projects exist for this user
INSERT INTO user_projects (
  user_id,
  name,
  description,
  tech_stack,
  github_link,
  live_link,
  devpost_link,
  image_url
) 
SELECT 
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'Duo Keyboard Koalition Website',
  'A modern community website for developers built with React, TypeScript, and Supabase. Features authentication, project management, and event RSVP functionality.',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
  'https://github.com/darcy/duo-keyboard-koalition',
  'https://duo-keyboard-koalition.github.io',
  null,
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400'
WHERE NOT EXISTS (
  SELECT 1 FROM user_projects 
  WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid
);

INSERT INTO user_projects (
  user_id,
  name,
  description,
  tech_stack,
  github_link,
  live_link,
  devpost_link,
  image_url
) 
SELECT 
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'TaskFlow - Project Management App',
  'A collaborative project management application with real-time updates, task tracking, and team communication features.',
  ARRAY['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
  'https://github.com/darcy/taskflow',
  'https://taskflow-app.vercel.app',
  'https://devpost.com/software/taskflow',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400'
WHERE (SELECT COUNT(*) FROM user_projects WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid) < 2;

INSERT INTO user_projects (
  user_id,
  name,
  description,
  tech_stack,
  github_link,
  live_link,
  devpost_link,
  image_url
) 
SELECT 
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'AI Code Assistant',
  'An intelligent code completion and suggestion tool powered by machine learning. Helps developers write better code faster.',
  ARRAY['Python', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL'],
  'https://github.com/darcy/ai-code-assistant',
  'https://ai-code-assistant.herokuapp.com',
  'https://devpost.com/software/ai-code-assistant',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
WHERE (SELECT COUNT(*) FROM user_projects WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid) < 3;

-- Add contributor records for all projects owned by Darcy Liu
INSERT INTO project_contributors (project_id, user_id, role, contribution_type, is_active)
SELECT 
  id as project_id,
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid as user_id,
  'owner' as role,
  ARRAY['creator', 'fullstack'] as contribution_type,
  true as is_active
FROM user_projects
WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid
ON CONFLICT (project_id, user_id) DO UPDATE SET
  role = EXCLUDED.role,
  contribution_type = EXCLUDED.contribution_type,
  is_active = EXCLUDED.is_active;
