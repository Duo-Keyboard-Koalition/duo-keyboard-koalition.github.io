import { NextResponse } from 'next/server';
export const dynamic = "force-static";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  github: string;
  linkedin: string;
}

// Hardcoded team member data
const teamMembers: TeamMember[] = [
  {
    name: "Mekkana Dara",
    role: "Founder & Lead Developer",
    image: "/images/team/mekkana.jpg",
    bio: "Full-stack developer with a passion for creating innovative solutions to real-world problems. Specializes in AI and machine learning applications.",
    github: "https://github.com/mekkanadara",
    linkedin: "https://linkedin.com/in/mekkanadara"
  },
  {
    name: "Alex Chen",
    role: "Technical Lead",
    image: "/images/team/alex.jpg",
    bio: "Experienced software engineer with expertise in backend systems and cloud infrastructure. Loves optimizing performance and building scalable solutions.",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen"
  },
  {
    name: "Sophia Rodriguez",
    role: "UX/UI Designer",
    image: "/images/team/sophia.jpg",
    bio: "Creative designer with a focus on user experience and interface design. Combines aesthetic sensibility with practical usability principles.",
    github: "https://github.com/sophiarodriguez",
    linkedin: "https://linkedin.com/in/sophiarodriguez"
  }
];

export async function GET() {
  return NextResponse.json(teamMembers);
}
