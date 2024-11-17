import React from "react";
import About from "./About/page";
import Hero from "./Hero/page";
import Contact from "./Contact/page";
import Services from "./Services/page";
import Skills from "./Skills/page";
import Portfolio from "./Portfolio/page";



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
