interface EventCardProps {
  title: string;
  description: string;
  pastEvents: string[];
  svg: JSX.Element;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, pastEvents, svg }) => {
  return (
    <div className="flex flex-col bg-[#fdf1ea] rounded-xl flex-0 p-6 gap-2 max-w-[400px]">
      <div>{svg}</div>
      <h4 className="text-left font-medium xl:text-lg text-sm">
        {title}
      </h4>
      <div className="min-h-[4rem] overflow-hidden">
      <p className="text-left xl:text-base text-xs">{description}</p>
      </div>
      <div>
      <h5 className="show text-[#da773d] text-left xl:text-lg text-xs font-medium pb-1">Past Events Included</h5>
        <ul className=" list-disc pl-8 pb-2">
          {pastEvents.map((event, index) => (
            <li key={index} className="xl:text-base text-xs">
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
