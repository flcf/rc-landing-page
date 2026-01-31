import React from 'react';
const Hero: React.FC = () => {
  return (
    <section className=" flex flex-col justify-center gap-12 p-32 md:px-10 lg:px-15 bg-[#fdf1ea] relative overflow-hidden m-0 mb-4">
      <div className="flex flex-col gap-3 bg-transparent z-40 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-24">
        <span className="bg-transparent">
          <h1 className="bg-transparent font-medium font-aleo">
            Unity through
          </h1>
          <h1 className="font-medium font-aleo bg-[#f38c51] w-fit px-[0.05em] rounded-[0.1em]">
            Asian Pop Culture
          </h1>
        </span>
        <p className="bg-transparent max-w-lg">
          Spark new connections by celebrating Asian Pop Culture and empowering
          Asian minorities and local businesses.
        </p>
        <button className="btn">Join Our Next Event</button>
      </div>
      <svg
        className="absolute bg-transparent w-[110%] h-full left-[40vw] top-[33%] z-[2]"
        width="581"
        height="607"
        viewBox="-2 -2 581 607"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M369.604 11.9499C437.93 31.4902 466.196 105.945 507.372 163.865C538.233 207.277 570.605 248.598 575.539 301.633C581.021 360.551 569.079 418.85 535.638 467.667C493.782 528.767 443.342 609.167 369.604 602.251C296.003 595.347 289.036 486.275 232.045 439.191C161.294 380.739 31.0195 389.853 5.72812 301.633C-20.4184 210.43 47.247 112.596 121.475 53.5032C189.68 -0.795303 285.785 -12.0215 369.604 11.9499Z"
          stroke="#93471B"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute bg-transparent w-[110%] h-full left-[40vw] top-[50%] z-[1]"
        width="581"
        height="607"
        viewBox="-2 -2 581 607"
        fill="rgb(241,116,45)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M369.604 11.9499C437.93 31.4902 466.196 105.945 507.372 163.865C538.233 207.277 570.605 248.598 575.539 301.633C581.021 360.551 569.079 418.85 535.638 467.667C493.782 528.767 443.342 609.167 369.604 602.251C296.003 595.347 289.036 486.275 232.045 439.191C161.294 380.739 31.0195 389.853 5.72812 301.633C-20.4184 210.43 47.247 112.596 121.475 53.5032C189.68 -0.795303 285.785 -12.0215 369.604 11.9499Z"
          stroke="none"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute bg-transparent w-[110%] h-full left-[-45vw] top-[-80%] z-[2]"
        width="561"
        height="593"
        viewBox="-2 -2 561 593"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M205.39 0.563373C279.552 -5.60613 330.454 66.6514 387.373 114.591C453.283 170.102 561.305 210.517 556.848 296.574C552.384 382.765 435.83 405.474 369.45 460.633C313.994 506.716 277.403 584.989 205.39 588.625C131.841 592.337 65.3092 538.966 23.8866 478.077C-11.6489 425.843 1.55086 359.539 6.70652 296.574C11.2417 241.187 20.3895 188.686 51.3604 142.544C91.8158 82.271 133.049 6.58143 205.39 0.563373Z"
          stroke="#F5B6B7"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute bg-transparent w-[110%] h-full left-[-40vw] top-[-80%] z-[1]"
        width="559"
        height="591"
        viewBox="-1 -1 559 591"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M205.39 0.563373C279.552 -5.60613 330.454 66.6514 387.373 114.591C453.283 170.102 561.305 210.517 556.848 296.574C552.384 382.765 435.83 405.474 369.45 460.633C313.994 506.716 277.403 584.989 205.39 588.625C131.841 592.337 65.3092 538.966 23.8866 478.077C-11.6489 425.843 1.55086 359.539 6.70652 296.574C11.2417 241.187 20.3895 188.686 51.3604 142.544C91.8158 82.271 133.049 6.58143 205.39 0.563373Z"
          fill="#E74E4F"
        />
      </svg>
    </section>
  );
};

export default Hero;
