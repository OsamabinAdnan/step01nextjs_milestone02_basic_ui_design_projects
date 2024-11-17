'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { HiPaintBrush } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { FaElementor } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { PiShoppingCartFill } from "react-icons/pi";




export default function Services() {
  return (
    <>
        <section id='services'>
                
                <div className="mainServicesDiv ">

                    
                    
                    <h1 className='h1MainServicesDiv'>My<span className='h1SpanMainServicesDiv'> Services</span> </h1>
                    
                    <div className='innerServicesDiv'>

                        {/* 1st box */}
                        <div className='boxDiv'>
                            <HiPaintBrush size={50} className='text-[#4ee247] '/>
                            <h1 className='h1boxDiv'>UI UX Designer</h1>
                            <p className='paraboxDiv'>Crafting seamless, user-centered designs that transform ideas into intuitive digital experiences. Let&apos;s design solutions that captivate and convert your audience</p>
                            <div >
                                <Button className="btnboxDivServices hoverMenu "><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>

                        {/* 2nd box */}
                        <div className='boxDiv'>
                            <FaCode size={50} className='text-[#4ee247]'/>
                            <h1 className='h1boxDiv'>Web Development</h1>
                            <p className='paraboxDiv'>Building fast, responsive websites tailored to your business needs. Get a sleek, functional site that stands out and delivers an exceptional user experience</p>
                            <div>
                                <Button className="btnboxDivServices hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 3rd box */}
                        <div className='boxDiv'>
                            <ImEarth size={50} className='text-[#4ee247]'/>
                            <h1 className='h1boxDiv'>Digital Marketing</h1>
                            <p className='paraboxDiv'>Elevating your brand with targeted digital strategies that drive traffic, boost engagement, and deliver measurable results. Let&apos;s grow your online presence together</p>
                            <div>
                                <Button className="btnboxDivServices hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 4th box */}
                        <div className='boxDiv'>
                            <FaElementor  size={50} className='text-[#4ee247] '/>
                            <h1 className='h1boxDiv'>Elementor</h1>
                            <p className='paraboxDiv'>Bringing your vision to life with Elementor&apos;s powerful, intuitive tools. Get a pixel-perfect, mobile-responsive site tailored to your brand&apos;s style and functionality.</p>
                            <div >
                                <Button className="btnboxDivServices hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 5th box */}
                        <div className='boxDiv'>
                            <SiGoogleads size={50} className='text-[#4ee247]'/>
                            <h1 className='h1boxDiv'>Google Ads</h1>
                            <p className='paraboxDiv'>Grow your business with Google Ads tailored to your goals. From campaign setup to optimization, reach more customers and get impactful results.</p>
                            <div>
                                <Button className="btnboxDivServices hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 6th box */}
                        <div className='boxDiv'>
                            <PiShoppingCartFill  size={50} className='text-[#4ee247]'/>
                            <h1 className='h1boxDiv'>eCommerce</h1>
                            <p className='paraboxDiv'>Comprehensive eCommerce solutions to power your online business. From product pages to checkout, we build seamless shopping experiences.</p>
                            <div>
                                <Button className="btnboxDivServices hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>
    </>
  )
}

