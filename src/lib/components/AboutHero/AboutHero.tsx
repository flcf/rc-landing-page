const AboutHero: React.FC = ()=> {
    return(
    <section className=" flex flex-col justify-center gap-12 p-32 md:px-10 lg:px-15 bg-[#fdf1ea] relative overflow-hidden m-0 mb-4">
    <div className="flex flex-col text-center gap-3 bg-transparent z-40 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-24">
        <h1 className="font-aleo font-medium">Promoting Asian pop culture</h1>
        <h1 className="font-aleo font-medium text-[#f38c51] ">to bridge cultural divides.</h1>
        <p className="pt-4 font-aleo">Roots collective reflects a commitment to promoting peace, unity, and understanding through Asian pop culture. It signifies a belief in the ability of cultural exchange to build bridges and create a world where differences are celebrated, and cultural harmony is a shared value. Through this unique mission, the organization aims to bring people together and contribute to a more harmonious and interconnected world.</p>
    </div>  
    </section>

    );
}
export default AboutHero;