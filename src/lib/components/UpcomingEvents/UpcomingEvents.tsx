import React, { useState } from "react";

const cities = ["Calgary", "Vancouver"];

const events = [
  {
    id: 1,
    city: "Calgary",
    title: "Shinjuku Station Night",
    date: "Feb 18-20",
    location: "The Velvet Room",
    organizer: "Roots Collective",
    link: "#",
  },
  {
    id: 2,
    city: "Calgary",
    title: "Galentine’s Coffee & Crafts",
    date: "Feb 17 at 10AM",
    location: "Alenn Sandwich & Coffee Shop",
    organizer: "Roots Collective",
    link: "#",
  },
  {
    id: 3,
    city: "Vancouver",
    title: "Pacific Beats & Brews",
    date: "Feb 24",
    location: "Sunset Lounge",
    organizer: "Roots Collective",
    link: "#",
  },
  {
    id: 4,
    city: "Vancouver",
    title: "Mountainside Maker Fair",
    date: "Feb 28 at 11AM",
    location: "Cypress Community Hall",
    organizer: "Roots Collective",
    link: "#",
  },
];

const UpcomingEvents: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("Calgary");
  const filteredEvents = events.filter((event) => event.city === selectedCity);

  return (
    <div className="bg-[#fff8f3] p-8 min-h-screen grid-cols-2 gap-8">
      <h1 className="bg-transparent font-medium font-aleo
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              leading-tight">Upcoming events</h1>

      <div className="flex mb-8 rounded-full border border-orange-600 overflow-hidden w-fit">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-5 py-2 text-sm font-medium transition-colors duration-200
              ${selectedCity === city
                ? "bg-orange-600 text-white"
                : "text-orange-600 hover:bg-orange-100"}`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2"
          >
            <span className="text-sm font-medium px-3 py-1 bg-orange-600 text-white rounded w-fit">
              {event.organizer}
            </span>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-sm text-gray-600">{event.location}</p>
            <a
              href={event.link}
              className="mt-2 text-orange-600 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              Learn more <span className="text-xs">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
