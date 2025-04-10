'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code, Users, Trophy, GitBranch, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  github: string;
  linkedin: string;
}

// Hardcoded team member data (ensures we don't have server component issues)
const teamMembers: TeamMember[] = [
  {
    name: "Darcy Liu",
    role: "Founder & Lead Developer and Supreme Commander",
    image: "/images/team/darcy.jpg",
    bio: "Strategic leader with expertise in coordinating complex technical initiatives. Drives innovation and team excellence as Supreme Commander.",
    github: "https://github.com/darcyliu",
    linkedin: "https://linkedin.com/in/darcyliu"
  },
  {
    name: "William Gun Edwardo",
    role: "Co-Commander & Full Stack Developer",
    image: "/images/team/william.jpg",
    bio: "Versatile full stack developer with strong leadership capabilities. Helps coordinate team efforts while delivering robust technical solutions.",
    github: "https://github.com/williamedwardo",
    linkedin: "https://linkedin.com/in/williamedwardo"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-white">About the Koalition</h1>
            <p className="text-xl text-gray-400">
              The Duo Keyboard Koalition is a community of innovative technologists, developers, and creators 
              who unite to compete in hackathons, build impactful projects, and push the boundaries of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Hack Together</h3>
                <p className="text-gray-400">Collaborate on innovative projects and push the boundaries of technology.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
                <p className="text-gray-400">Join a supportive network of like-minded tech enthusiasts.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Compete</h3>
                <p className="text-gray-400">Participate in hackathons and coding competitions as a team.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Innovate</h3>
                <p className="text-gray-400">Create solutions that make a real impact in the world.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Goals</h2>
            <p className="text-gray-400 text-lg mb-8">
              The Koalition is a new breed of hackathon competitor. It is no longer teams of 4 attending - it is an entire community. 
              The warring states period of hackathons has begun, and we're leading the charge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <GitBranch className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Largest Hackathon Faction</h3>
                <p className="text-gray-400">We're building Canada's largest hackathon faction, bringing together talented individuals under one banner.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Seeking Impact</h3>
                <p className="text-gray-400">We focus on creating technology that serves humanity's best interests as AI takes on more roles in programming.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Meet the Team</h2>
            <p className="text-gray-400 text-lg">
              Our team consists of passionate technologists with diverse backgrounds and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 text-white hover:text-primary" />
                    </Link>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 text-white hover:text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join the Koalition</h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to be part of something special? We're always looking for passionate individuals to join our community.
            </p>
            <Link href="https://discord.gg/6GaWZAawUc" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8">Join Our Discord</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
