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
    <section className="grid-cols-2 gap-8 px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-24 lg:py-32 xl:px-40 xl:py-36 bg-[#fdf1ea] relative overflow-hidden m-0 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
  <div
    className="
      flex flex-col gap-3 bg-transparent z-40
      ml-0 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-24
    "
  >
    <div className="flex flex-col gap-y-4 xl:flex-row xl:items-center xl:justify-between">
      <h1 className="bg-transparent font-medium font-aleo
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-tight">
        Upcoming events
      </h1>
      <div className="flex border border-rc-orange rounded-full overflow-hidden w-fit">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-5 py-2 text-sm font-medium font-montserrat rounded-full transition-colors duration-200
              ${selectedCity === city
                ? "bg-rc-orange text-white"
                : "text-rc-orange hover:bg-rc-bg"}`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {filteredEvents.map((event) => (
        <div
          key={event.id}
          className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-2 font-montserrat"
        >
          <span className="text-sm font-small px-3 py-1 bg-rc-orange text-white rounded w-fit">
            {event.organizer}
          </span>
          <p className="text-xl ">{event.title}</p>
          <p className="text-sm text-gray-600">{event.date}</p>
          <p className="text-sm text-gray-600">{event.location}</p>
          <a
            href={event.link}
            className="mt-2 text-rc-orange text-sm font-medium flex items-center gap-1 hover:underline"
          >
            Learn more <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 4.5C8.86739 4.5 8.74021 4.55268 8.64645 4.64645C8.55268 4.74021 8.5 4.86739 8.5 5V8C8.5 8.13261 8.44732 8.25979 8.35355 8.35355C8.25979 8.44732 8.13261 8.5 8 8.5H2C1.86739 8.5 1.74021 8.44732 1.64645 8.35355C1.55268 8.25979 1.5 8.13261 1.5 8V2C1.5 1.86739 1.55268 1.74021 1.64645 1.64645C1.74021 1.55268 1.86739 1.5 2 1.5H5C5.13261 1.5 5.25979 1.44732 5.35355 1.35355C5.44732 1.25979 5.5 1.13261 5.5 1C5.5 0.867392 5.44732 0.740215 5.35355 0.646447C5.25979 0.552678 5.13261 0.5 5 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V8C0.5 8.39782 0.658035 8.77936 0.93934 9.06066C1.22064 9.34196 1.60218 9.5 2 9.5H8C8.39782 9.5 8.77936 9.34196 9.06066 9.06066C9.34196 8.77936 9.5 8.39782 9.5 8V5C9.5 4.86739 9.44732 4.74021 9.35355 4.64645C9.25979 4.55268 9.13261 4.5 9 4.5Z" fill="#D25D19"/>
</svg>

          </a>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default UpcomingEvents;
