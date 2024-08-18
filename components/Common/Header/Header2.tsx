import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import Link from "next/link";

const Header2 = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <header className="bg-heroPrimary w-full text-white">
        <nav className="wrapper2 md:h-[120px] h-[100px] mx-auto flex justify-between gap-[1rem]">
          <div className="flex md:px-[2rem] items-center">
            <Image
              src={logo}
              alt=""
              height={200}
              className="md:w-full h-[50px] md:h-[80px]   "
            />
          </div>

          <div className="md:flex justify-end px-[2rem] hidden items-center gap-[2rem] w-[100%] text-[18px] font-century">
            <Link
              href="#"
              className="text-[16px] text-white hover:text-headerText"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-[16px] text-white hover:text-headerText"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-[16px] text-white hover:text-headerText"
            >
              Resources
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex">
            <button
              onClick={toggleSidebar}
              className="block text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {openSidebar ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {openSidebar && (
              <div className="absolute top-[100px] max-h-fit bg-opacity-90 left-0 w-full bg-heroPrimary flex items-center justify-center">
                {/* Your mobile menu items here */}
                <ul className="py-[5rem] flex flex-col gap-10 w-full ">
                  <li className="hover:bg-gray-400 py-[1rem] flex items-center justify-center">
                    <Link href="#" className="text-yellow-100">
                      Services
                    </Link>
                  </li>
                  <li className="hover:bg-gray-400 py-[1rem] flex items-center justify-center">

                    <Link href="#" className="text-yellow-100">
                      Resources
                    </Link>
                  </li>
                  <li className="hover:bg-gray-400 py-[1rem] flex items-center justify-center">
                    <Link href="#" className="text-yellow-100">
                    Investments
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header2;
