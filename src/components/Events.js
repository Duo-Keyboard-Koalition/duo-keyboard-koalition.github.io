import React from 'react';
import eventsData from '../data/events.json';
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
  );
}

export default Events;