import { MemberCardProps } from './types';

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, role, image, bio }) => {
  const formatName = (firstName: string, lastName: string) => {
    const toCapitalize = [firstName, lastName];
    toCapitalize.map((value) => value[0].toUpperCase() + value.slice(1));
    const fullName = toCapitalize.join(' ');

    return fullName;
  };

  return (
    <div className="flex flex-initial md:flex-col flex-row gap-2 md:w-96 md:h-auto mb-3">
      <img className="rounded-md object-cover w-40 h-40 md:w-full md:h-auto" src={image} alt={formatName(firstName, lastName)} />
      <div className="flex flex-col overflow-hidden">
        <h5>{formatName(firstName, lastName)}</h5>
        <p className="text-md mb-3">{role}</p>
        <span className="text-[0.5rem] md:text-sm">{bio}</span>
      </div>
    </div>
  );
};

export default MemberCard;
