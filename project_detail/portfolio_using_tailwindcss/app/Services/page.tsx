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
                
            <div className="sm:p-[50px] p-[30px] bg-white max-w-full h-auto mx-auto lg:text-ellipsis relative z-50 "> 
                    
                <h1 className='text-black lg:text-[65px] text-[55px] font-extrabold font-[montserrat] text-center mb-20 mt-20'>My<span className=' text-[#4ee247]'> Services</span> </h1>
                    
                    <div className='flex lg:flex-row justify-center gap-4 flex-col flex-wrap items-center relative'>

                        {/* 1st box */}
                        <div className=' flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <HiPaintBrush size={50} className='text-[#4ee247] '/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>UI UX Designer</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Crafting seamless, user-centered designs that transform ideas into intuitive digital experiences. Let&apos;s design solutions that captivate and convert your audience</p>
                            <div >
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu "><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>

                        {/* 2nd box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <FaCode size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>Web Development</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Building fast, responsive websites tailored to your business needs. Get a sleek, functional site that stands out and delivers an exceptional user experience</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 3rd box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <ImEarth size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>Digital Marketing</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Elevating your brand with targeted digital strategies that drive traffic, boost engagement, and deliver measurable results. Let&apos;s grow your online presence together</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 4th box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <FaElementor  size={50} className='text-[#4ee247] '/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>Elementor</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Bringing your vision to life with Elementor&apos;s powerful, intuitive tools. Get a pixel-perfect, mobile-responsive site tailored to your brand&apos;s style and functionality.</p>
                            <div >
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 5th box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <SiGoogleads size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>Google Ads</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Grow your business with Google Ads tailored to your goals. From campaign setup to optimization, reach more customers and get impactful results.</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                        {/* 6th box */}
                        <div className='flex flex-col border-black bg-white justify-center items-center px-8 py-10  border-solid max-w-[500px] w-auto max-h-full h-[540px] rounded-xl border-4 hover:border-4 hover:border-solid hover:border-[#4ee247] hover:transition hover:ease-out duration-500 hover:scale-105'>
                            <PiShoppingCartFill  size={50} className='text-[#4ee247]'/>
                            <h1 className='text-black font-bold lg:text-[35px] md:text-[30px] sm:text-[25px] text-[22px] mt-1 mb-4 text-center'>eCommerce</h1>
                            <p className='text-black text-center mb-5 lg:text-[25px] md:text-[20px] sm:text-[15px] text-[12px] font-medium'>Comprehensive eCommerce solutions to power your online business. From product pages to checkout, we build seamless shopping experiences.</p>
                            <div>
                                <Button className="bg-black text-white hover:text-black lg:text-[20px] md:text-[16px] text-[12px] lg:w-[150px] lg:h-[40px] md:w-[120px] md:h-[30px] w-[100px] h-[20px]  font-bold rounded-[10px] hoverMenu hoverMenu"><a href="#" target='_blank'>Read More </a>
                                </Button>
                            </div>
                        </div>
                    </div>
            </div>
            
        </section>
    </>
  )
}

