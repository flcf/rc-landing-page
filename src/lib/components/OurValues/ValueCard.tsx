
type ValueCardProps = {
    title: string,
    description: string
    
}

const ValueCard: React.FC<ValueCardProps> = ({title, description})=> {
    return(
        <div className="w-[80%] ml-2 bg-white rounded-md p-6">
            <div>
            <h3 className="font-aleo xl:text-3xl w-fit border-b-2 border-[#d7743a]">{title}</h3>
            {/* <div className="w-8 h-[2px] rounded-sm bg-[#f38c51] mt-1 mb-4"></div> */}
            <p className="text-xs xl:text-lg mt-2">{description}</p>

            </div>
            
        </div>
    )
}

export default ValueCard;