import React from "react";

const NewsLetter: React.FC = () => {
  return (
    <div className="relative bg-[#FFE2BC] overflow-hidden min-h-[400px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[600px] xl:min-h-[700px]">
      {/* Orange curved container as SVG */}
      <div className="absolute left-0 top-0 w-full h-[95%]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 H1440 V400 C960,480 480,480 0,400 Z"
            fill="#D25D19"
          />
          <path
            d="M0,400 C480,480 960,480 1440,400"
            stroke="#93471B"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>
      {/* Content positioned above SVG */}
      <div className="relative flex flex-col items-center gap-4 py-16 sm:py-12 md:py-20 lg:py-32 xl:py-40 z-10">
        <h2 className="text-white text-2xl md:text-4xl font-aleo font-medium text-center">
          Join our newsletter
        </h2>
        <p className="text-white text-lg md:text-xl font-montserrat text-center mb-4">
          Stay updated on upcoming events + discounts + perks!
        </p>
<form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl sm:max-w-md sm:px-8 md:max-w-lg justify-center items-center">          <input
            type="email"
            placeholder="Email"
            className="bg-[#FFF3EC] text-[#93471B] placeholder-[#93471B] rounded-lg
              px-4 py-3 text-base
              sm:px-2 sm:py-1.5 sm:text-sm sm:w-auto
              md:px-6 md:py-4 md:text-lg md:w-auto
              font-montserrat w-full flex-grow outline-none border-none shadow transition-all duration-200"
            required
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="bg-white text-[#93471B] rounded-full
              px-6 py-3 text-base
              sm:px-6 sm:py-3 sm:text-base
              md:px-8 md:py-4 md:text-lg
              font-montserrat font-medium shadow transition hover:bg-[#FFF3EC] transition-all duration-200"
            style={{ minWidth: "7rem" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;