import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import aboutImage from '../../public/Aboutdesign2.png'
import { IoIosMore } from "react-icons/io";




export default function About() {
  return (
    <>
        <section id='about'>  
    
            <div className="relative flex sm:p-[50px] p-[30px] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[20px] gap-[40px] lg:text-ellipsis z-50">
            
                {/* Left Section Image */}
                <div className='flex basis-[40%] w-full justify-center items-center mx-auto'>    
                    <Image src={aboutImage} alt='About-Image' className='relative'/>
                </div>
                {/* Right Section Image */}
                <div className='basis-[60%] justify-center items-center'>
                    <h1 className='text-black text-[35px] lg:text-[60px] md:text-[40px] font-extrabold font-[montserrat]'>About <span className='text-[35px] lg:text-[60px] md:text-[40px] text-[#4ee247]'>Me</span></h1>
                    <h4 className='text-black lg:text-[30px] md:text-[26px] text-[22px] font-semibold font-[montserrat] mb-10'>Digital Marketer | Frontend Developer | UI UX Designer</h4>
                    <p className='text-black text-left font-medium font-[montserrat] lg:text-[28px] md:text-[22px] text-[18px] mb-10'>With a degree in Textile Engineering, MBA in Marketing, and certification in Digital Marketing, I create impactful online strategies that drive growth. Now diving into Cloud Applied Generative Engineering, I&apos;m blending marketing expertise with tech innovation to deliver results. Let&apos;s work together to elevate your brand and accelerate your business success.</p>
                    <div className='flex justify-center lg:justify-start'>
                        {/* Button */}
                        <Button className=" hoverMenu bg-black text-white hover:text-black font-bold rounded-[10px]"><IoIosMore /><a href="./OsamabinAdnanCV.pdf" target='_blank'>Contact</a>
                        </Button>
                    </div>
                    
                </div>
                    {/* Blur Effect Background */}
            <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] bottom-[20%] right-[0%] rounded-full blur-[50px] opacity-100 -z-10'></span>
            </div>
            
        </section>
    </>
  )
}

