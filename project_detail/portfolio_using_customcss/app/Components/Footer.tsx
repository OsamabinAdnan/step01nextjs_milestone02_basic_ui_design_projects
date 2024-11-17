import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
        <div className='footerMainDiv bgImage'>
            
            {/* Divider line */}
            <div >
                <div className='dividerLineDiv'>
                </div>
            </div>

            <div className='socialMediaOuterDiv'>
                {/* Social Media links */}
                <div className='socialMediaDiv'>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaGithub className='socialMediaLinks'/></Link>
                    <Link href={'https://www.linkedin.com/in/osama-bin-adnan/'} target='_blank'><FaLinkedinIn className='socialMediaLinks'/></Link>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaFacebookF className='socialMediaLinks'/></Link>
                    <Link href={'https://github.com/OsamabinAdnan'} target='_blank'><FaInstagram className='socialMediaLinks'/></Link>
                </div>

                {/* Copyright line */}
                <div className='copyRightDiv'>
                    <p className=' copyRightPara'>&copy; 2024 Osama bin Adnan. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </>
  )
}