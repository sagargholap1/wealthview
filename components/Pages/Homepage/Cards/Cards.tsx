import Image from "next/image";
import React from "react";
import card1 from "../../../../public/assets/card1.webp";
import card2 from "../../../../public/assets/card2girl.webp";
import card3 from "../../../../public/assets/cardgirl2.webp";
import card5 from "../../../../public/assets/card5men.webp";
import cardgif from "../../../../public/assets/card2.gif";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";

import { FaStar } from "react-icons/fa";

const Cards = () => {
  return (
    <section className=" bg-gradient-to-r from-[#1B1B1B] to-[#144148] bg-no-repeat bg-cover w-[100vw] h-auto">
      {/* First Card */}
      <div className="wrapper2 py-[2rem] md:px-[10rem] flex   md:flex-row flex-col-reverse items-center gap-[2rem] justify-between my-[2rem]  md:my-[4rem]">
        <div className="md:w-[60%] flex flex-col items-center md:items-start py-[2rem] gap-[2rem] ">
          <p className="text-[#03A3BD] text-[15px] font-semibold text-center md:text-left hidden md:block">
            We are the true meaning of assisted tax compliance
          </p>
          <h1 className="text-[50px] text-white text-center md:text-left">
            No hidden charges
          </h1>
          <p className="text-white text-[16px] text-center md:text-left md:w-[80%]">
            97.4% of our users do not receive a tax notice. But if you do, we
            will take care of it without any additional cost.
          </p>
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
        <div className="md:w-[40%] flex flex-col items-center gap-4">
          <p className="text-[#03A3BD] text-[15px] font-semibold text-center md:hidden">
            We are the true meaning of assisted tax compliance
          </p>
          <Image
            src={card1}
            alt="rating"
            className="w-[50%]  h-auto object-contain "
          />
        </div>
      </div>
      {/* second Card */}
      <div className="bg-white  my-[4rem]">
        <div className="wrapper2 bg-white md:px-[10rem] flex items-center md:flex-row flex-col-reverse gap-[2rem] justify-between pt-[2rem]">
          <div className="md:w-[50%] flex items-center justify-center">
            <Image
              src={card3}
              alt="rating"
              className="w-[70%]  h-auto object-contain "
            />
          </div>
          <div className="md:w-[50%] flex flex-col items-left justify-center py-[2rem] gap-[2rem] ">
            <p className="text-[#03A3BD] text-[15px] font-semibold hidden md:block">
              We are the true meaning of assisted tax compliance
            </p>
            <h1 className="text-[35px] md:text-[50px] text-black">
              Start Income Tax efiling with our tax expert today
            </h1>
            <div className="flex md:flex-row flex-col items-center   md:gap-4">
              <p className="text-[16px] py-[1rem] font-semibold flex gap-1 items-center font-century tracking-wider">
                <FaStar /> 4.9 Rating
              </p>
              <p className="text-[16px] py-[1rem] font-semibold flex gap-1 items-center font-century tracking-wider">
                {" "}
                <ImUsers /> 10Lakh+ Users
              </p>
              <p className="text-[16px] py-[1rem] font-semibold flex gap-2 items-center font-century tracking-wider">
                <BsPatchCheckFill />
                3000+ Tax experts
              </p>
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
        </div>
      </div>

      {/* Third Card */}
      <div className="wrapper2 md:px-[10rem] flex md:flex-row flex-col gap-6 md:gap-0 items-center  justify-between mt-[4rem]">
        <div className="md:w-[50%] flex flex-col items-center md:items-start py-[2rem] gap-[1.5rem] md:gap-[2rem]">
          <h1 className="md:text-[50px] text-[35px] text-center md:text-left text-white w-[90%]">
            Get your investment portfolio analyzed within minutes
          </h1>
          <p className="text-white md:text-[19px] text-[20px]  ">
            Introducing TaxBuddy’s Portfolio Doctor
          </p>
          <p className="text-white text-[16px] text-center md:text-left w-[80%]">
            Share your CAS and download your customized report
          </p>
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
        <div className="md:w-[50%] w-[90%] flex items-baseline">
          <Image
            src={card2}
            alt="rating"
            className="md:w-[60%] w-[70%] h-auto object-contain "
          />
          <Image
            src={cardgif}
            alt="rating"
            className="md:w-[60%] w-[50%] h-auto object-contain "
          />
        </div>
      </div>

      {/* Fourth Card */}
      <div className="bg-[#E8F3B5] pt-[2rem]">
        <div className="wrapper2  md:px-[10rem] flex flex-col-reverse md:flex-row items-center gap-[2rem] justify-between mt-[1rem]">
          <div className="md:w-[50%] flex flex-col-reverse relative bottom-0 md:flex-row-reverse items-center justify-center">
            <Image
              src={card3}
              alt="rating"
              className="md:w-[70%] w-[70%] md:-bottom-4 relative right-20 md:right-0 z-20 h-auto object-contain "
            />
            <Image
              src={cardgif}
              alt="rating"
              className="md:w-[50%] w-[53%] absolute md:left-0 left-[50%] md:relative h-auto object-contain "
            />
          </div>
          <div className="md:w-[50%] flex flex-col items-left justify-center py-[2rem] gap-[1.5rem] md:gap-[2rem] ">
            <h1 className="md:text-[45px] text-[35px] text-center md:text-left  text-black">
              Advisory investment advisory
            </h1>
            <p className="text-black text-[20px] ">
              Introducing TaxBuddy’s Wealth Builder
            </p>
            <p className="text-black text-[15px] ">
              Get customized investment advice based on your past investments
              and future goals.
            </p>

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
        </div>
      </div>

      {/* Fifth Card */}
      <div className="wrapper2 md:px-[10rem] flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between mt-[3rem]">
        <div className="md:w-[50%] flex flex-col items-left justify-center  py-[2rem] gap-[1.5rem] md:gap-[2rem] ">
          <h1 className="md:text-[50px] text-[35px] text-center md:text-left text-white w-[90%]">
            Buy ‘No commission’ Mutual Funds
          </h1>
          <p className="text-white text-[19px] ">
            Review Fund’s historical returns, analyze risk and get estimated
            future returns
          </p>
          <p className="text-white text-[16px] w-[80%]">
            Choose your funds with our advanced rating system
          </p>
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
        <div className="md:w-[50%] relative  flex items-baseline">
          <Image
            src={card5}
            alt="rating"
            className="md:w-[60%] w-[70%] relative left-5 z-20 md:left-0 h-auto object-contain "
          />
          <Image
            src={cardgif}
            alt="rating"
            className="md:w-[60%] w-[51%] absolute md:relative left-[50%] md:left-0 h-auto object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
