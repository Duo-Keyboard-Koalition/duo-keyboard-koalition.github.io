-- Debug script to check project data for Darcy Liu
-- Run this in your Supabase Dashboard SQL Editor

-- Check if user exists
SELECT 'User check:' as info, id, email FROM auth.users WHERE id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid;

-- Check projects in user_projects table
SELECT 'Projects in user_projects:' as info, COUNT(*) as count FROM user_projects;
SELECT 'Projects for Darcy:' as info, COUNT(*) as count FROM user_projects WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid;

-- Show all projects for Darcy
SELECT 'Darcy projects:' as info, id, name, description, created_at 
FROM user_projects 
WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid 
ORDER BY created_at DESC;

-- Check project_contributors table
SELECT 'Contributors table count:' as info, COUNT(*) as count FROM project_contributors;
SELECT 'Darcy contributor records:' as info, COUNT(*) as count FROM project_contributors WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid;

-- Show contributor records for Darcy
SELECT 'Darcy contributor details:' as info, pc.role, pc.is_active, up.name as project_name
FROM project_contributors pc
JOIN user_projects up ON pc.project_id = up.id
WHERE pc.user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid;

-- Test the exact query the API uses (complex query)
SELECT 'API Complex Query Test:' as info;
SELECT 
  up.*,
  pc.role,
  pc.contribution_type,
  pc.joined_at,
  pc.is_active
FROM user_projects up
INNER JOIN project_contributors pc ON up.id = pc.project_id
WHERE pc.user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid
  AND pc.is_active = true
ORDER BY up.created_at DESC;

-- Test the fallback query
SELECT 'API Fallback Query Test:' as info;
SELECT * FROM user_projects 
WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid 
ORDER BY created_at DESC;
