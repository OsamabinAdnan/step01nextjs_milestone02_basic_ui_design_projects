import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import aboutImage from '../../public/Aboutdesign2.png'
import { IoIosMore } from "react-icons/io";




export default function About() {
  return (
    <>
        <section id='about'>  
    
            <div className="mainAboutDiv">
            <span className='bgBlurEffect2'></span>
                {/* Left Section Image */}
                <div className='leftSectionDivAbout'>    
                    <Image src={aboutImage} alt='About-Image' className='relative'/>
                </div>
                {/* Right Section Image */}
                <div className='rightSectionDivAbout'>
                    <h1 className='h1rightSectionDivAbout'>About <span className='h1SpanrightSectionDivAbout'>Me</span></h1>
                    <h4 className='h4RightSectionDivAbout'>Digital Marketer | Frontend Developer | UI UX Designer</h4>
                    <p className='paraRightSectionDivAbout'>With a degree in Textile Engineering, MBA in Marketing, and certification in Digital Marketing, I create impactful online strategies that drive growth. Now diving into Cloud Applied Generative Engineering, I&apos;m blending marketing expertise with tech innovation to deliver results. Let&apos;s work together to elevate your brand and accelerate your business success.</p>
                    <div className='btnDivAbout'>
                        {/* Button */}
                        <Button className=" hoverMenu btnTagAbout"><IoIosMore /><a href="./OsamabinAdnanCV.pdf" target='_blank'>Contact</a>
                        </Button>
                    </div>
                    
                </div>
                
            </div>
            
        </section>
    </>
  )
}
