type MemberCardProps = {
    firstName: string;
    lastName: string;
    role: string;
    image: string;
};

const MemberCard: React.FC<MemberCardProps> = ({image, firstName, lastName, role})=> {
    

    const formatName = (firstName: string, lastName: string) => {
        let toCapitalize = [firstName,lastName];
        toCapitalize.map((value) => value[0].toUpperCase() + value.slice(1)
        )
        let fullName = toCapitalize.join(" ");

        return fullName

    };
    
    return(<div>
        <img src={image} alt={formatName(firstName, lastName)}/>
        <h3>${formatName(firstName, lastName)}</h3>
        <p>{role}</p>



    </div>)
};

export default MemberCard;
