import members from "../../../static/assets/data/members";
import MemberCard from "./MemberCard";


const MTT: React.FC = ()=>{
    return(
        <section className="bg-[#fdf1ea] md:px-10 lg:px-15 pb-1">
            <h2 className="font-aleo">Meet the Team</h2>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10">
            {members.map(member => (
                <MemberCard key={member.id} firstName={member.firstName} lastName={member.lastName} image={member.image} role={member.role} bio={member.bio}/>
            ))}
            </div>
        </section>
    )
};

export default MTT;