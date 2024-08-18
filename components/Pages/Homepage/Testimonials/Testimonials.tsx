import Image from "next/image";
import React from "react";
import review1 from "../../../../public/assets/reviews/Capture.jpg";
import review2 from "../../../../public/assets/reviews/Capture2.jpg";
import review3 from "../../../../public/assets/reviews/Capture3.jpg";
import review4 from "../../../../public/assets/reviews/Capture4.jpg";
import review5 from "../../../../public/assets/reviews/Capture5.jpg";

const Testimonials = () => {
  return (
    <section className=" bg-[#DAF3E1] bg-no-repeat bg-cover w-[100vw] md:h-[100vh] ">
      <div className="wrapper2 md:px-[10rem]  flex flex-col gap-8 relative items-center md:items-start justify-right py-[2rem]">
        <h1 className="font-century text-[3rem] font-semibold py-[2rem]">
          Hear from our clients
        </h1>

        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="  ">
            <Image
              src={review1}
              alt="rating"
              className="w-full rounded-md  h-auto object-contain shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className=" ">
            <Image
              src={review2}
              alt="rating"
              className="w-full rounded-md  h-auto object-contain shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="  ">
            <Image
              src={review3}
              alt="rating"
              className="w-full rounded-lg  h-auto object-contain shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="md:flex gap-4 absolute bottom-[-11rem] hidden ">
            <div className=" ">
              <Image
                src={review4}
                alt="rating"
                className="w-full rounded-md  h-auto object-contain shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className=" relative bottom-10 left-4 shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]">
              <Image
                src={review5}
                alt="rating"
                className="w-full rounded-md  h-auto object-contain shadow-[10px_15px_20px_-12px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
