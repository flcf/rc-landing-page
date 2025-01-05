import LandingAboutLogo from "../../../static/assets/imgs/LandingAbout.png";
import React from 'react';

const LandingAbout: React.FC = () => {
  return (
    <section className="flex flex-row relative justify-center items-center pt-8 pb-16 md:m-10 min-h-[40em]">
      {/* Background Image */}
      <div className="absolute lg:left-10 top-0 min-h-[90%] w-full bg-cover bg-center rounded-xl md:h-[30em] md:max-w-[50rem] xl:left-auto " style={{ backgroundImage: `url(${LandingAboutLogo})` }}></div>

      {/* Content Section */}
      <div className="bg-[#efeeee] absolute md:p-8 rounded-xl xl:left-[50%] md:w-70% top-[10rem] w-[80%] p-7 md:right-auto lg:right-[6rem] md:mr-7 md:max-w-[20rem]">
        <span className="flex flex-col justify-center gap-4">
          <h3 className="text-lg font-medium border-b-2 border-[#d7743a] w-fit">About Us</h3>
          <p className=" text-xs md:text-sm mb-4">
            Roots Collective is a non-profit events organization with a mission to spark new
            connections and interests through celebrating Asian pop culture and empowering Asian
            minorities in North America.
          </p>
        </span>
        <a
          href="/about"
          className="text-[#995229] text-xs md:text-sm"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default LandingAbout;


