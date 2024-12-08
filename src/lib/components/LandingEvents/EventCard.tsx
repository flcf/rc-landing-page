interface EventCardProps {
  title: string;
  description: string;
  pastEvents: string[];
  svg: JSX.Element;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, pastEvents, svg }) => {
  return (
    <div className="flex flex-col bg-[#fdf1ea] rounded-xl flex-0 p-4 gap-3 w-[500px]">
      <div>{svg}</div>
      <h4 className="text-left font-medium text-lg min-h-[2rem]">
        {title}
      </h4>
      <div className="h-[8rem] overflow-hidden">
      <p className="text-left min-h-[4rem]">{description}</p>
      </div>
      <div>
      <h5 className="show text-[#da773d] text-left font-medium">Past Events Included</h5>
        <ul className=" list-disc pl-8 pb-2">
          {pastEvents.map((event, index) => (
            <li key={index} className="show">
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
