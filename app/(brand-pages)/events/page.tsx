'use client';
import React from "react";
import { Calendar, Users, Flag, Shield, Sword, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      
      <div className="w-full overflow-x-hidden flex-grow container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Upcoming Events</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join the Duo Keyboard Koalition at our upcoming hackathons, workshops, and gatherings. 
              Together we forge solutions and strengthen our collective skills.
            </p>
          </div>

          {/* Featured Event */}
          <div className="mb-16">
            <div className="bg-gray-900 border border-primary rounded-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="bg-black/30 p-6 rounded-lg flex items-center justify-center">
                    <Shield className="w-24 h-24 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <Flag className="w-5 h-5 text-primary mr-2" />
                      <span className="text-primary font-medium">Event In Ideation</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Kongregation</h3>
                    
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Dates TBD • One Week Hackathon</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-6">
                      <Users className="w-5 h-5 mr-2" />
                      <span>Help us shape this event - share your feedback!</span>
                    </div>
                    
                    <div className="bg-black/20 p-6 rounded-lg mb-6">
                      <h4 className="text-lg font-bold text-white mb-3">The Modern Syssitia</h4>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        The Kongregation is our week-long event inspired by the Spartan syssitia - 
                        a communal gathering focused on discipline, equality, and fraternity. This is the 
                        Spartan equivalent of the Athenian symposium, but with a hacker twist.
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Unlike traditional 48-hour hackathons, the Kongregation spans a full week, allowing 
                        for deeper collaboration, more ambitious projects, and the forging of stronger bonds. 
                        Participants contribute not just code, but ideas, mentorship, and resources to maintain 
                        the communal spirit that defines the Koalition.
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        This is a buildathon like no other - we ask that you bring a project you've 
                        previously started at a hackathon that you want to expand upon. Please don't 
                        bring fully developed products or start something entirely new. The focus is on 
                        iteration, refinement, and taking promising hackathon ideas to the next level.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-black/20 p-4 rounded-lg flex items-center">
                        <Sword className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm text-gray-300">Competitive Challenges</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-lg flex items-center">
                        <Users className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm text-gray-300">Team Formation</span>
                      </div>
                      <div className="bg-black/20 p-4 rounded-lg flex items-center">
                        <FlaskConical className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm text-gray-300">Mentorship & Workshops</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="min-w-[160px]">
                        Share Feedback
                      </Button>
                      <Button variant="outline" size="lg" className="min-w-[160px]">
                        Join Planning Committee
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Past Events</h3>
            <p className="text-gray-400">
              Explore our previous gatherings and the projects that emerged from them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <Calendar className="w-8 h-8 text-primary" />
                    <span className="text-xs text-gray-500">March 2024</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Weekly Pheiditia</h4>
                  <p className="text-gray-400 mb-4">
                    A 72-hour hackathon focused on AI tools and sustainable technology solutions.
                  </p>
                  <Link href="https://github.com/Duo-Keyboard-Koalition/past-events" className="text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    View Showcase →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
