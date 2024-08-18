import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

//Component

// Config

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <header className="bg-heroPrimary  w-[100vw] text-white " id="header">
        <nav className="h-[130px] w-[90%] mx-auto wrapper2 flex items-center justify-between gap-[1rem] ">
          {/* LEFT */}
          <div className="flex items-center gap-[3rem] basis-[30%] ">
            <Link href="/">
              <div className=" ">
                <Image
                  src={logo}
                  alt=""
                  height={200}
                  className="w-full h-[80px]"
                />
              </div>
            </Link>
          </div>

          {/* MIDDLE */}
          <div className=" flex justify-center items-center ">
            <div className="leading-[2.2rem] flex justify-center items-center gap-[2rem] w-[100%] text-black text-[18px] font-century">
              <Link
                className="hover:text-headerText hover:duration-500 text-white font-semibold font-century"
                href="#contributions"
              >
                Services
              </Link>
              <Link
                className="hover:text-headerText hover:duration-300 text-white font-semibold"
                href="#core-values"
              >
               Resources
              </Link>
              <Link
                className="hover:text-headerText hover:duration-300 text-white font-semibold"
                href="#companies"
              >
                Investments
              </Link>
              {/* <Link
                className="hover:text-headerText hover:duration-300 text-white font-semibold"
                href="#writer"
                onClick={() => setOpenDropdown((prev) => !prev)}
              >
                Writer
              </Link> */}
              
              <button className="bg-cyan-500 px-[20px] py-[5px]  text-[1rem] cursor-pointer rounded-md text-white font-medium">
                 Login
                </button>

              {/* Add state for dropdown */}

              {/* {openDropdown && <Dropdown />} */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
