import LandingAboutLogo from "../../../static/assets/LandingAbout.png";
const LandingAbout = () => {
    return (
      <section className="relative flex flex-row items-center gap-8 p-8 px-[15vw] min-h-[40em] md:flex-col md:px-[10vw] md:justify-center">
        {/* First div with background image */}
        <div className="absolute min-h-[90%] w-1/2 bg-cover bg-center md:relative md:h-[30em] md:w-full" 
            style={{ backgroundImage: `url(${LandingAboutLogo})` }} >
        </div>
        
        {/* Second div containing the content */}
        <div className="translate-x-[40vw] bg-[#efeeee] p-8 flex flex-col justify-center gap-8 rounded-lg md:translate-x-0 md:w-4/5 md:-translate-y-[10em] md:p-4 sm:w-full sm:translate-y-0">
          <span className="flex flex-col gap-4">
            <h3 className="font-medium border-b border-[#d7743a] w-fit">About Us</h3>
            <p className="max-w-[30em]">
              Roots Collective is a non-profit events organization with a mission to spark new connections and interests through celebrating Asian pop culture and empowering Asian minorities in North America.
            </p>
          </span>
          <a href="/about" className="text-[#995229]">Learn More About Us</a>
        </div>
      </section>
    );
  };
  

export default LandingAbout;