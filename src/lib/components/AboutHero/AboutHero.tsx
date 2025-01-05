const AboutHero: React.FC = ()=> {
    return(
    <section className=" flex flex-col justify-center gap-12 py-32 px-12 md:px-10 lg:px-15 bg-[#fdf1ea] relative overflow-hidden">
    <div className="flex flex-col text-center min-w-10 gap-3 bg-transparent sm:mx-2 md:mx-10 lg:mx-14 xl:mx-48">
        <h1 className="font-aleo font-medium">Promoting Asian pop culture</h1>
        <h1 className="font-aleo font-medium text-[#f38c51] ">to bridge cultural divides.</h1>
        <p className="pt-4 font-aleo">Roots collective reflects a commitment to promoting peace, unity, and understanding through Asian pop culture. It signifies a belief in the ability of cultural exchange to build bridges and create a world where differences are celebrated, and cultural harmony is a shared value. Through this unique mission, the organization aims to bring people together and contribute to a more harmonious and interconnected world.</p>
    </div>  
    </section>

    );
}
export default AboutHero;