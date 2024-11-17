import React from "react";
import About from "./About/page";
import Hero from "./Hero/page";
import Skills from "./Skills/page";
import Services from "./Services/page";
import Portfolio from "./Portfolio/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
