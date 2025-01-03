import LandingAboutLogo from "../../../static/assets/imgs/LandingAbout.png";
import React from 'react';

const LandingAbout: React.FC = () => {
  return (
    <section className="flex flex-row relative justify-center items-center pt-8 px-[15vw] pb-16 min-h-[40em]">
      {/* Background Image */}
      <div className="absolute top-0 left-0 min-h-[90%] w-[50%] bg-cover bg-center rounded-xl md:w-full md:relative md:h-[30em]" style={{ backgroundImage: `url(${LandingAboutLogo})` }}></div>

      {/* Content Section */}
      <div className="bg-[#efeeee] relative p-8 rounded-xl flex flex-col justify-center md:w-[50%] top-[50px] right-28 md:right-40 sm:right-auto">
        <span className="flex flex-col justify-center gap-4">
          <h3 className="text-lg font-medium border-b-2 border-[#d7743a] w-fit show">About Us</h3>
          <p className="max-w-[30em] show mb-4">
            Roots Collective is a non-profit events organization with a mission to spark new
            connections and interests through celebrating Asian pop culture and empowering Asian
            minorities in North America.
          </p>
        </span>
        <a
          href="/about"
          className="text-[#995229] show"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default LandingAbout;


