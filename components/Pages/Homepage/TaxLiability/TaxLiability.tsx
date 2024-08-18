import Image from "next/image";
import React from "react";
import iphone from "../../../../public/assets/iphone.webp";
import gear from "../../../../public/icons/gear.webp";
import secure from "../../../../public/icons/secure-data.webp";
import calender from "../../../../public/icons/calendar.webp";
import integration from "../../../../public/icons/integration.webp";
import { FaLightbulb } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";


const TaxLiability = () => {
  return (
    <section className="  bg-no-repeat bg-cover w-[100vw] h-auto">
      <div className=" bg-[#E4DCF3] flex flex-col gap-[2rem] ">
        <div className="wrapper2 md:px-[10rem] flex flex-wrap md:flex-nowrap md:items-center md:justify-center my-[2rem] md:my-[5rem]">
          <div className=" p-6 w-full ">
            <p className="text-[1rem]">Users</p>
            <p className="text-[2rem] md:border-r-[1px]  p-2 border-gray-400 font-semibold flex items-center gap-2 font-century tracking-wider">
              <MdPeopleAlt />
              10,00,000+
            </p>
            <p className="  p-4 text-[12px] pt-[3rem]">
              Users from 2600 towns trust TaxBuddy
            </p>
          </div>
          <div className="  p-6 w-full ">
            <p className="text-[1rem]">Impact</p>
            <p className="text-[2rem]  md:border-r-[1px] p-2 border-gray-400 font-semibold flex items-center gap-2 font-century  tracking-wider">
              <FaLightbulb /> 94%
            </p>
            <p className=" p-4 text-[12px] pt-[3rem]">
              That’s how many 1st time users save tax with TaxBuddy
            </p>
          </div>
          <div className="  p-6 w-full ">
            <p className="text-[1rem]">Founded</p>
            <p className="text-[2rem] p-2 border-gray-400 font-semibold flex items-center gap-2 font-century tracking-wider">
              <FaBolt />
              2017
            </p>
            <p className="  p-4 text-[12px] pt-[3rem]">
              Led by a team of ex-IRS officers and accomplished CAs and
              Engineers
            </p>
          </div>
        </div>
        {/* IPhone section */}
        <div className="wrapper2 md:px-[10rem] pt-[2rem] flex flex-wrap md:flex-nowrap items-center md:items-start justify-center gap-[1rem]">
          <div className="md:basis-[50%] flex items-center justify-center">
            <Image
              src={iphone}
              alt="rating"
              className="md:w-[90%] w-[80%] h-[70%] md:h-[100%] object-contain "
            />
          </div>
          <div className="md:basis-[50%] flex flex-col py-[2rem] md:px-0 md:items-start justify-start gap-[2rem]">
            <h1 className="md:text-[60px] text-[40px] text-center md:text-left">
              Reduce your tax liability up to 26%
            </h1>
            <div className="flex gap-1 md:gap-4 flex-col md:flex-row items-center md:items-start justify-start">
              <p className="text-[14px] py-[1rem] flex gap-3 items-center"> <FaCircleCheck  className="text-[1.4rem] text-gray-600"/>
 Your personal tax expert</p>
              <p className="text-[14px] py-[1rem] flex gap-3 items-center"><FaCircleCheck className="text-[1.4rem] text-gray-600" />
 On-demand tax support</p>
              <p className="text-[14px] py-[1rem] flex gap-3 items-center"><FaCircleCheck className="text-[1.4rem] text-gray-600" />
 Guaranteed accuracy</p>  
            </div>
            <div>
              <form className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  className="rounded-md placeholder:text-[1rem]  p-[.5rem] placeholder:p-2 placeholder:py-2  border-[1px] border-black drop-shadow-lg shadow-black"
                  placeholder="Enter your mobile number"
                />
                <button className="bg-cyan-500 p-[1rem] text-[1rem] rounded-md text-white font-medium">
                  Start Filing
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Partner assist */}

        <div className=" bg-white px-[3rem] md:px-[10rem] flex flex-col justify-between items-center py-[2rem] gap-[2rem]">
          <h1 className=" text-[35px] ]md:text-[40px] text-center">
            Taxbuddy: Your Partner for Assisted Tax Filing
          </h1>
          <h1 className="text-[18px] text-center md:text-[25px] ">
            Taxbuddy is your ideal partner for assisted tax filing as we offer
          </h1>
          <div className="grid md:grid-rows-2 md:grid-cols-2 gap-5 w-[80%] md:w-[40%]">
            <div className="flex flex-col gap-2 items-center justify-center  p-[2rem] row-span-1 bg-[#D1F6FD] w-[100%] ">
              <Image
                src={gear}
                alt="rating"
                className="w-[25%]  h-auto object-contain "
              />

              <h1 className="text-[24px] text-center mt-6">Expert Assistance</h1>
              <p className="text-[14px] text-center font-century">
                Our team of tax professionals is always ready to help you with
                any queries or concerns you may have.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-[2rem] row-span-1 bg-[#D1F6FD] w-[100%] ">
              <Image
                src={secure}
                alt="rating"
                className="w-[25%]  h-auto object-contain "
              />
              <h1 className="text-[24px] text-center mt-6">Secure and Private:</h1>
              <p className="text-[14px] text-center font-century">
                Your data security is our top priority. Rest assured, your
                information is encrypted and protected.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-[2rem] row-span-1 bg-[#D1F6FD] w-[100%] ">
              <Image
                src={calender}
                alt="rating"
                className="w-[25%]  h-auto object-contain "
              />
              <h1 className="text-[24px] text-center mt-6">Timely Filing:</h1>
              <p className="text-[14px] text-center font-century">
                Never miss a deadline again. TaxBuddy sends you timely
                reminders, ensuring you file your ITR on time.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-[2rem] row-span-1 bg-[#D1F6FD] w-[100%] ">
              <Image
                src={integration}
                alt="rating"
                className="w-[25%]  h-auto object-contain "
              />
              <h1 className="text-[23px] text-center mt-6">Seamless Integration:</h1>
              <p className="text-[14px] text-center font-century">
                ​ Easily import your financial data from various sources, making
                the filing process quick and efficient.
              </p>
            </div>
          </div>
          <p className="text-[16px] text-center">
            Take control of your taxes today and experience the convenience of E
            Tax filing with TaxBuddy.{" "}
          </p>
          <div>
            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                className="rounded-md placeholder:text-[1rem] p-[.5rem] placeholder:p-2 placeholder:py-2 border-[1px] border-black drop-shadow-lg shadow-black"
                placeholder="Enter your mobile number"
              />
              <button className="bg-cyan-500 p-[1rem] text-[1rem] rounded-md text-white font-medium">
                Start Filing
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxLiability;
