/*
  # Create Project Contributors Many-to-Many Relationship

  1. New Table
    - `project_contributors`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references user_projects)
      - `user_id` (uuid, references auth.users)
      - `role` (text, enum: owner, contributor, viewer)
      - `contribution_type` (text array, e.g., ['frontend', 'backend', 'design'])
      - `joined_at` (timestamp)
      - `is_active` (boolean, default true)
  
  2. Migration Strategy
    - Create new table with proper constraints
    - Migrate existing project ownership to new table
    - Add RLS policies for contributors
    - Update existing projects to have the original user as owner
  
  3. Security
    - Contributors can view projects they're part of
    - Only owners can manage contributors
    - All contributors can view project details
*/

-- Create project_contributors junction table
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

-- Policies for project_contributors
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

-- Migrate existing projects to the new contributor system
-- Make all existing project creators the "owner" of their projects
INSERT INTO project_contributors (project_id, user_id, role, contribution_type, is_active)
SELECT 
  id as project_id,
  user_id,
  'owner' as role,
  ARRAY['creator'] as contribution_type,
  true as is_active
FROM user_projects
ON CONFLICT (project_id, user_id) DO NOTHING;

-- Add the specific user (Darcy Liu) as owner of all existing projects if not already set
-- This ensures the user ID 0fb1e9c3-2afe-4c64-a918-2032f8853f99 has access to all projects
INSERT INTO project_contributors (project_id, user_id, role, contribution_type, is_active)
SELECT 
  id as project_id,
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid as user_id,
  'owner' as role,
  ARRAY['creator'] as contribution_type,
  true as is_active
FROM user_projects
ON CONFLICT (project_id, user_id) DO NOTHING;
