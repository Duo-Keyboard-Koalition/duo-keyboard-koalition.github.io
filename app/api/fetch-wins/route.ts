import { NextResponse } from 'next/server';
export const dynamic = "force-static";

export async function GET() {
  const winsData = [
    {
      name: "OpenSesame",
      event: "HackTheNorth 2024",
      date: "February 2024",
      description: "An AI-powered door security system that uses facial recognition and voice commands to provide secure and convenient access control for homes and businesses.",
      image: "/images/opensesame-win.webp",
      prize: "1st Place Overall & Best Use of AI",
      team: ["Mekkana Dara", "Alex Chen", "Sophia Rodriguez", "James Wilson"],
      projectLink: "https://github.com/duo-keyboard-koalition/opensesame",
      devpostLink: "https://devpost.com/software/opensesame-ai-door"
    },
    {
      name: "EcoTrack",
      event: "ClimateHacks 2024",
      date: "March 2024",
      description: "A mobile app that helps users track and reduce their carbon footprint through personalized recommendations and community challenges.",
      image: "/images/ecotrack-win.jpg",
      prize: "2nd Place Overall & Community Choice Award",
      team: ["Mekkana Dara", "James Wilson", "Emily Johnson"],
      projectLink: "https://github.com/duo-keyboard-koalition/ecotrack",
      devpostLink: "https://devpost.com/software/ecotrack"
    },
    {
      name: "StudyBuddy",
      event: "EdTech Innovation Challenge",
      date: "September 2023",
      description: "An AI-powered study assistant that helps students organize their learning materials, create personalized study plans, and connect with peers for collaborative learning.",
      image: "/images/studybuddy-win.jpg",
      prize: "3rd Place Overall & Best UX Design",
      team: ["Mekkana Dara", "Sophia Rodriguez", "Michael Lee"],
      projectLink: "https://github.com/duo-keyboard-koalition/studybuddy",
      devpostLink: "https://devpost.com/software/studybuddy-ai"
    }
  ];

  return NextResponse.json(winsData);
}
