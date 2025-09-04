/*
  # Add Sample Projects for Darcy Liu

  This migration adds sample projects to the database so the user can see projects
  when they log in and test the many-to-many contributor functionality.
*/

-- Insert sample projects for Darcy Liu
INSERT INTO user_projects (
  user_id,
  name,
  description,
  tech_stack,
  github_link,
  live_link,
  devpost_link,
  image_url
) VALUES 
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'Duo Keyboard Koalition Website',
  'A modern community website for developers built with React, TypeScript, and Supabase. Features authentication, project management, and event RSVP functionality with a sleek dark theme.',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
  'https://github.com/duo-keyboard-koalition/website',
  'https://duo-keyboard-koalition.github.io',
  null,
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400'
),
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'TaskFlow - Project Management App',
  'A collaborative project management application with real-time updates, task tracking, team communication, and deadline management. Built for remote teams.',
  ARRAY['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT'],
  'https://github.com/darcy/taskflow',
  'https://taskflow-app.vercel.app',
  'https://devpost.com/software/taskflow',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400'
),
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'AI Code Assistant',
  'An intelligent code completion and suggestion tool powered by machine learning. Helps developers write better code faster with context-aware suggestions and error detection.',
  ARRAY['Python', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis'],
  'https://github.com/darcy/ai-code-assistant',
  'https://ai-code-assistant.herokuapp.com',
  'https://devpost.com/software/ai-code-assistant',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
),
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'EcoTracker - Carbon Footprint Monitor',
  'A mobile app that helps users track and reduce their carbon footprint through daily activity monitoring, eco-friendly suggestions, and progress tracking.',
  ARRAY['React Native', 'Firebase', 'Chart.js', 'Expo', 'AsyncStorage'],
  'https://github.com/darcy/ecotracker',
  null,
  'https://devpost.com/software/ecotracker',
  'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400'
),
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'CryptoPortfolio Analyzer',
  'A comprehensive cryptocurrency portfolio tracking and analysis platform with real-time price updates, investment insights, and risk assessment tools.',
  ARRAY['Vue.js', 'Node.js', 'Redis', 'CoinGecko API', 'Chart.js', 'WebSocket'],
  'https://github.com/darcy/crypto-portfolio',
  'https://crypto-portfolio-analyzer.netlify.app',
  null,
  'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400'
),
(
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid,
  'DevMeetup - Developer Events Platform',
  'A platform for organizing and discovering developer meetups, workshops, and conferences. Features event creation, RSVP management, and networking tools.',
  ARRAY['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  'https://github.com/darcy/devmeetup',
  'https://devmeetup.io',
  'https://devpost.com/software/devmeetup',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400'
);

-- Add contributor records for all projects (Darcy as owner)
INSERT INTO project_contributors (project_id, user_id, role, contribution_type, is_active)
SELECT 
  id as project_id,
  '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid as user_id,
  'owner' as role,
  CASE 
    WHEN name LIKE '%Website%' THEN ARRAY['creator', 'frontend', 'backend', 'design']
    WHEN name LIKE '%TaskFlow%' THEN ARRAY['creator', 'fullstack', 'project-management']
    WHEN name LIKE '%AI%' THEN ARRAY['creator', 'backend', 'ml-engineering', 'devops']
    WHEN name LIKE '%EcoTracker%' THEN ARRAY['creator', 'mobile', 'ui-design']
    WHEN name LIKE '%Crypto%' THEN ARRAY['creator', 'frontend', 'api-integration']
    WHEN name LIKE '%DevMeetup%' THEN ARRAY['creator', 'fullstack', 'product-management']
    ELSE ARRAY['creator', 'fullstack']
  END as contribution_type,
  true as is_active
FROM user_projects
WHERE user_id = '0fb1e9c3-2afe-4c64-a918-2032f8853f99'::uuid
ON CONFLICT (project_id, user_id) DO UPDATE SET
  role = EXCLUDED.role,
  contribution_type = EXCLUDED.contribution_type,
  is_active = EXCLUDED.is_active;
