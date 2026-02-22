import React from 'react';

type ChevronButtonProps = {
  onClick: () => void;
  label: string;
};

const ChevronButton: React.FC<ChevronButtonProps> = ({onClick, label}: ChevronButtonProps) => {
  return (
    <button
      className="
          btn mt-4
          font-montserrat
          text-base sm:text-lg md:text-xl
          px-6 py-2
          flex items-center gap-2 shadow-lg
        "
    >
      {label}
      {/* Chevron SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="white"
        className="w-5 h-5 ml-2"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default ChevronButton;
