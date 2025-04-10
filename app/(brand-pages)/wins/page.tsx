'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import { Button } from '@/components/ui/button';
import { Trophy, Calendar, ExternalLink, Award } from 'lucide-react';

interface Win {
  name: string;
  event: string;
  date: string;
  description: string;
  image: string;
  prize: string;
  team: string[];
  projectLink?: string;
  devpostLink?: string;
}

export default function WinsPage() {
  const [winsData, setWinsData] = useState<Win[]>([]);

  useEffect(() => {
    async function fetchWins() {
      const response = await fetch('/api/fetch-wins');
      const data = await response.json();
      setWinsData(data);
    }
    fetchWins();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <div className="relative h-[50vh] overflow-hidden">
          <Image 
            src="/images/trophy-banner.jpg" 
            alt="Trophy Banner"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <Award className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-white mb-4">Our Victories</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Celebrating innovation, teamwork, and excellence at hackathons across North America
            </p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Championship Projects</h2>
          <p className="text-xl text-gray-400">
            The Koalition has a track record of success at hackathons and competitions. Here are some of our proudest achievements.
          </p>
        </div>
        
        <div className="space-y-12 mb-16">
          {winsData.map((win, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image 
                    src={win.image} 
                    alt={win.name} 
                    width={500}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-yellow-500 font-bold">{win.prize}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-white">{win.name}</h2>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{win.date}</span>
                    <span>{win.event}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{win.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">Team Members</h3>
                    <div className="flex flex-wrap gap-2">
                      {win.team.map((member, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {win.projectLink && (
                      <Link href={win.projectLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          GitHub Repo
                        </Button>
                      </Link>
                    )}
                    {win.devpostLink && (
                      <Link href={win.devpostLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Devpost
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Join Our Next Victory</h2>
          <p className="text-gray-400 mb-6">
            Want to be part of our next winning team? Join the Koalition and participate in upcoming hackathons with us!
          </p>
          <Link href="https://discord.gg/6GaWZAawUc" target="_blank" rel="noopener noreferrer">
            <Button size="lg">Join Our Discord</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
