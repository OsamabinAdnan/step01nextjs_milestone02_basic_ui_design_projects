import React from "react";
import { Button } from "@/components/ui/button";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <section id="contact" className="">
        <div className=" sm:p-[80px] p-[30px] bg-white max-w-full h-auto lg:gap-[40px] gap-[20px] lg:text-ellipsis relative z-50">

          {/* Blur effect backside */}
          <span className="absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[220px] bg-[#4ee247] top-[50%] left-[0%] rounded-full blur-[50px] opacity-100 z-0 "></span>

          <h1 className="text-black lg:text-[65px] text-[55px] font-extrabold font-[montserrat] text-center mb-20 mt-20">
            Contact <span className="text-[#4ee247]">Me!</span>
          </h1>
          <div className=" flex items-center justify-center flex-col mx-auto ">
            <form action="" className="flex items-center justify-center flex-col mx-auto">
              <label htmlFor="fname"></label>
              <input type="text" name="fname" id="fname" placeholder="Enter your First Name"  className="py-[17px] px-[30px] lg:w-[1000px] md:w-[650px] sm:w-[500px] w-[250px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black my-5" />
              <label htmlFor="lname"></label>
              <input type="text" name="lname" id="lname" placeholder="Enter your Last Name" className="py-[17px] px-[30px] lg:w-[1000px] md:w-[650px] sm:w-[500px] w-[250px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black my-5" />
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder="Enter your Email Adress" className="py-[17px] px-[30px] lg:w-[1000px] md:w-[650px] sm:w-[500px] w-[250px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black my-5"/>
              <label htmlFor="phone"></label>
              <input type="number" name="phone" id="phone" placeholder="Enter your Phone No" className="py-[17px] px-[30px] lg:w-[1000px] md:w-[650px] sm:w-[500px] w-[250px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black my-5"/>
              <label htmlFor="msg"></label>
              <textarea name="msg" id="" placeholder="Enter your msg" className="py-[17px] px-[30px] lg:w-[1000px] md:w-[650px] sm:w-[500px] w-[250px] relative rounded-xl active:bg-[#eeeeee] bg-white border-2 hover:border-2 border-black hover:border-[#4ee247]  text-black mt-5 mb-10"></textarea>
            </form>
            <div className="flex justify-center item-center">
                <Button className="bg-black text-white hover:text-black hoverMenu font-bold rounded-[10px] ">
                  <FaCircleArrowRight />
                  Click to Submit
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
