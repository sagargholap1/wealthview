import Image from "next/image";
import React, { useState } from "react";
import heroman from "../../../../public/assets/manhero.webp";
import herogif from "../../../../public/assets/herogif.gif";
import rating from "../../../../public/assets/rating.webp";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [textColor, setTextColor] = useState("red");
  return (
    <section className=" bg-heroPrimary bg-no-repeat bg-cover w-[100vw] min-h-fit ">
      <div className="bg-[#E2EEAA] flex items-center justify-center h-[3rem]">
        <p className="wrapper2 text-[16px] md:text-[1.3rem] font-bold text-center">
          Prepare your Tax Returns with TaxBuddy ! Get started{" "}
          <span className="text-[#259a26]">NOW!</span>
        </p>
      </div>
      <div className=" px-[2rem] wrapper2 h-[calc(100%-13.5rem)] flex justify-center flex-wrap md:flex-nowrap mt-[4rem] ">
        <div className="md:pl-[7rem] flex flex-col gap-6 md:basis-[50%]">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-[3rem] md:text-[3.8rem]">
              Assisted Income
            </h1>
            <h1 className="text-white text-[3rem] md:text-[3.8rem]">
              Tax efiling platform
            </h1>
            <h1 className="text-white text-[3rem] md:text-[3.8rem]">for</h1>
          </div>

          <div
            className=" font-semibold "
            style={{
              fontSize: "30px",
              color: "#ff7f50",
            }}
          >
            {/* <span></span> */}
            <TypeAnimation
              sequence={[
                "Share Investors",
                1000,
                "Salaried Taxpayers",
                1000,
                "Whatnext Traders",
                1000,
                "Future and Options Traders",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div>
            <p className="text-white text-[1.2rem]">
              4.9 ★ Google rating from 12,500+ reviews
            </p>
          </div>
          <div>
            <Image
              src={rating}
              alt="rating"
              className="w-[45%]  h-[100%] object-contain left-2 "
            />
          </div>

          <form className="flex flex-col md:flex-row items-center justify-center gap-3 w-full">
            <input
              type="text"
              className="rounded-md placeholder:text-[1rem] placeholder:p-2 placeholder:py-2 w-full md:w-auto"
              placeholder="Enter your mobile number"
            />
            <button className="bg-cyan-500 p-[1rem] text-[1rem] rounded-md text-white font-medium">
              Start Filing
            </button>
          </form>
        </div>

        <div className="flex md:basis-[50%] ">
          <div className="flex  w-full relative  items-end justify-center ">
            <Image
              src={heroman}
              alt="heroImage"
              className="w-[50%]  md:h-[70%] object-contain absolute z-20 left-5 md:left-2 md:right-0 "
            />
            <Image
              src={herogif}
              alt="heroImage"
              className="w-[50%] md:h-[90%] h-[80%] object-contain relative"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#151414] ">
        <div className=" wrapper flex flex-col md:flex-row justify-start md:justify-center items-center gap-1 text-white text-opacity-55 h-[8rem] md:gap-[3rem] text-[1.3rem] overflow-hidden  ">
          <p>Business Insider </p>
          <p>Business Standard </p>
          <p>Financial Express </p>
          <p>SEBI</p>
          <p>NSDL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
