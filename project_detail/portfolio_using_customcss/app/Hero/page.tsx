'use client'
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from 'next/image';
import heroPicture from '../../public/osamacanva.png'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdDownload } from "react-icons/md";





export default function Hero() {
    const [text] = useTypewriter({
        words: [
          " Frontend Developer!",
          " UI UX Designer!",
          " Digital Marketer!",
          " WordPress Developer!",
        ],
        loop: 100,
        onLoopDone: () => console.log(`loop completed after 5000 runs.`),
      });
  return (
    <>
     <div className='mainHeroDiv'>
        <div className=' innerHeroDiv'>
            {/* Left working */}
            <div className=' container leftSectionDiv'>
                <div className='leftSectioninnerDiv'>
                    <h1 className='h1leftSectioninnerDiv'>👋Hi!</h1>
                    <h1><span className='h1firstspanLeftSection'>This is</span><span className='h1seondspanLeftSection'> Osama bin Adnan</span></h1>
                    <span className='firstspanleftSection'>I&apos;m</span><span className='secondspanleftSection'>{text}<Cursor/></span>
                    <p className="paragraphLeftSection "> I&apos;m a passionate Frontend Developer, UI/UX Designer, and Digital Marketer with a keen eye for detail and user-centric design. I specialize in creating visually appealing, responsive web interfaces while ensuring seamless user experiences and driving engagement through targeted digital marketing strategies.
                    </p>
                    <div className="socialLinkDivLeftSection">
                        <Link href="https://github.com/OsamabinAdnan" target="_blank" className="socialLinksLeftSection"><FaGithub size={40} /></Link>
                        <Link href="https://www.linkedin.com/in/osama-bin-adnan/" target="_blank" className="socialLinksLeftSection"><FaLinkedin size={40} /></Link>
                        <Link href="https://www.facebook.com/usama.adnan.733/" target="_blank" className="socialLinksLeftSection"><IoLogoFacebook size={40} /></Link>
                        <Link
                        href="https://www.instagram.com/osamabinadnan/?hl=en" target="_blank" className="socialLinksLeftSection"><AiFillInstagram size={40} /></Link>
                    </div>
                    <div className="btnDivHeroLeftSection">
                        {/* Button */}
                        <Button className="hoverMenu btnHeroSection">
                            <MdDownload /><a href="OsamabinAdnanCV.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Right side working */}
            <div className='rightSectionDiv'>
                <div className="rightSectionInnerDiv">
                    <Image src={heroPicture} alt='hero-sectionPicture' className='rightSectionInnerDivImage'></Image>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}