import ValueCard from "./ValueCard";
import values from "../../../static/assets/data/values";

const OurValues: React.FC = ()=> {
    return (
        <section className="bg-[#fdf1ea] md:px-10 lg:px-15 pb-32">
            <h2 className="font-aleo text-lg sm:text-xl md:text-2xl lg:text-4xl">Our Values</h2>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch mt-10 mx-2">
            {values.map((card)=> <ValueCard key={card.id} title={card.value} description={card.description}/> )}
            </div>
           
        </section>
    )
};

export default OurValues;