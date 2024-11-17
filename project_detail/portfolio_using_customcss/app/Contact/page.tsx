import React from "react";
import { Button } from "@/components/ui/button";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <section id="contact" className="">
        <div className=" mainContactDiv">

          {/* Blur effect backside */}
          <span className="bgBlurEffect4"></span>

          <h1 className="h1ContactSection">
            Contact <span className="text-[#4ee247]">Me!</span>
          </h1>
          <div className=" innerDivContactSection ">
            <form action="" className="innerDivContactSectionForm">
              <label htmlFor="fname"></label>
              <input type="text" name="fname" id="fname" placeholder="Enter your First Name"  className="inputelements" />
              <label htmlFor="lname"></label>
              <input type="text" name="lname" id="lname" placeholder="Enter your Last Name" className="inputelements" />
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder="Enter your Email Adress" className="inputelements"/>
              <label htmlFor="phone"></label>
              <input type="number" name="phone" id="phone" placeholder="Enter your Phone No" className="inputelements"/>
              <label htmlFor="msg"></label>
              <textarea name="msg" id="" placeholder="Enter your msg" className="textareaElementContactSection"></textarea>
            </form>
            <div className="btnDivContactSection">
                <Button className="btnContactSection hoverMenu ">
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
