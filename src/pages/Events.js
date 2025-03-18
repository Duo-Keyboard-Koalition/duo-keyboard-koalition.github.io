import React from 'react';
import eventsData from '../data/events.json';
import { Card, CardContent } from "../components/ui/card";
import Hero from "../components/Hero";
//    {
//      "name": "DKK Code Jam",
//      "date": "2024-09-05",
//      "description": "Rapid-fire coding challenges to test your skills and speed",
//      "image": "/images/code-jam.jpg",
//      "location": "Multiple Locations",
//      "registrationLink": "https://dkk-events.com/code-jam-2024"
//    }
function Events() {
  return (
    <div>
      <Hero />
    <section>
      <h2 className="text-3xl font-bold mb-6">WIP: Upcoming Events</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event, index) => (
          <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{event.name}</h3>
              <p className="text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    
    <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            The Four Seasons of the Koalition
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our community operates in a cyclical rhythm that maximizes growth,
            innovation, and competitive success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                The Mending Moon
              </h3>
              <p className="text-gray-400">
                A time of respite and renewal. We focus on skill development,
                learning new technologies, and preparing for future challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-yellow-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                The Forging Sun
              </h3>
              <p className="text-gray-400">
                We turn inward to build internal projects, refine our processes,
                and strengthen our technical foundation as a team.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                The Scouting Winds
              </h3>
              <p className="text-gray-400">
                A period of assessment and recruitment as we evaluate our
                strengths and welcome new talent to our ranks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-purple-500">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                The Battle Frost
              </h3>
              <p className="text-gray-400">
                The season of competition begins as we unite our skills and
                creativity to tackle hackathons and bring glory to the
                Koalition.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Events;