import members from '../../../static/assets/data/members';
import MemberCard from './MemberCard';
import { RoleGroup } from './types';

const MTT: React.FC = () => {
  const directorMembers = members.filter((member) => member.roleGroup === RoleGroup.DIRECTOR);
  const coordinatorMembers = members.filter((member) => member.roleGroup === RoleGroup.COORDINATOR);

  return (
    <section className="bg-[#fdf1ea] pb-32">
      <h2 className="font-aleo text-lg sm:text-xl md:text-2xl lg:text-4xl px-5 md:px-10 lg:px-15">
        Meet the Team
      </h2>
      <div className="md:px-10 lg:px-15">
        <div className="flex flex-wrap justify-center gap-8 my-10">
          {directorMembers.map((member) => (
            <MemberCard
              key={member.id}
              {...member}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {coordinatorMembers.map((member) => (
            <MemberCard
              key={member.id}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MTT;
