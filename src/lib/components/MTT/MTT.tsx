import members from "../../../static/assets/data/members";
import MemberCard from "./MemberCard";


const MTT: React.FC = ()=>{
    return(
        <section>
            {members.map(member => (
                <MemberCard key={member.id} firstName={member.firstName} lastName={member.lastName} image={member.image}role={member.role}/>
            ))}
        </section>
    )
};

export default MTT;