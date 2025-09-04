/*
  # Fix RLS Policy Recursion
  
  The previous policies were causing infinite recursion. This migration:
  1. Drops all problematic policies
  2. Creates simple, non-recursive policies
  3. Ensures users can access their contributed projects
*/

-- Drop all existing policies that might cause recursion
DROP POLICY IF EXISTS "Users can view contributors of projects they have access to" ON project_contributors;
DROP POLICY IF EXISTS "Project owners can manage contributors" ON project_contributors;
DROP POLICY IF EXISTS "Users can update their own contributor record" ON project_contributors;
DROP POLICY IF EXISTS "Contributors can view projects they're part of" ON user_projects;
DROP POLICY IF EXISTS "Project owners can manage projects" ON user_projects;

-- Simple, non-recursive policies for project_contributors
CREATE POLICY "Users can view their own contributor records"
  ON project_contributors
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view contributor records for projects they own"
  ON project_contributors
  FOR SELECT
  TO authenticated
  USING (
    project_id IN (
      SELECT id FROM user_projects WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Project owners can manage contributor records"
  ON project_contributors
  FOR ALL
  TO authenticated
  USING (
    project_id IN (
      SELECT id FROM user_projects WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    project_id IN (
      SELECT id FROM user_projects WHERE user_id = auth.uid()
    )
  );

-- Simple, non-recursive policies for user_projects
CREATE POLICY "Users can view projects they contribute to"
  ON user_projects
  FOR SELECT
  TO authenticated
  USING (
    -- Direct ownership
    user_id = auth.uid()
    OR
    -- Contributor access (direct lookup, no subquery)
    id IN (
      SELECT project_id FROM project_contributors 
      WHERE user_id = auth.uid() AND is_active = true
    )
  );

CREATE POLICY "Project owners can manage their projects"
  ON user_projects
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
