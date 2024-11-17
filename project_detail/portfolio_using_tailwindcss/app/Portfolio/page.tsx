import React from 'react'
import Image from 'next/image'
import pic1 from '../../public/thumbnail.png'
import pic2 from '../../public/thumbnail2.png'
import pic3 from '../../public/Assignment 08 Thumbnail.png'
import pic4 from '../../public/Resumethumbnail.png'
import pic5 from '../../public/Questions.png'
import pic6 from '../../public/weather_app.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'



export default function Portfolio() {
  return (
    <>
        <section>
                
            <div className=" sm:p-[80px] p-[30px] bg-white max-w-full h-auto mx-auto lg:gap-[40px] gap-[20px] lg:text-ellipsis relative z-50">

                    {/* Blur effect backside */}
                    
                    <span className='bgBlurEffect3'></span>
                    
                    <h1 className='text-black lg:text-[65px] text-[55px] font-extrabold font-[montserrat] text-center mb-20 mt-20'>My<span className='text-[#4ee247]'> Portfolio</span> </h1>
                    {/* 1st picture */}
                    <div className='grid xl:grid-cols-3 gap-5'>
                        <div className='w-full h-full group  '>
                            <div className='relative overflow-hidden'>
                                <Image src={pic1} alt='pic1' className=' border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px] '>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>Portfolio Website</h3>
                                    <p className='text-white text-center sm:text-[18px] text-[8px] sm:mb-4 mb-[8px] sm:mx-5 mx-[12px]  '> Developed a portfolio website by converting a Figma design into a responsive site using Next.js, Tailwind CSS, and Shadcn UI</p>
                                    <Button className=' bg-[#4ee247] rounded-[10px] text-white sm:py-2 py-0 px-1 sm:px-5 text-[8px] sm:text-[22px] sm:mb-4 mb-1 hoverMenu'><Link href={'https://portfolio-website-figma.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 2nd picture */}
                        <div className='w-full h-full group group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic2} alt='pic2' className='border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>VR Zone</h3>
                                    <p className='text-white text-center sm:text-[18px] text-[8px] sm:mb-4 mb-[8px] sm:mx-5 mx-[12px]'> Built a VR website by converting a Figma design with Next.js, Tailwind CSS, and Shadcn UI.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px] text-white sm:py-2 py-0 px-1 sm:px-5 text-[8px] sm:text-[22px] sm:mb-4 mb-1 hoverMenu'><Link href={'https://vrzone.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 3rd picture */}
                        <div className='w-full h-full group group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic3} alt='pic2' className=' border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>Financial Dashboard</h3>
                                    <p className='text-white text-center sm:text-[18px] text-[8px] sm:mb-4 mb-[8px] sm:mx-5 mx-[12px]'> Developed a Financial Dashboard website by following the Next.js official course, utilizing Next.js, and Tailwind CSS for a clean and responsive interface.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px] text-white sm:py-2 py-0 px-1 sm:px-5 text-[8px] sm:text-[22px] sm:mb-4 mb-1 hoverMenu'><Link href={'https://financialdashboard-assignment.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 4th picture */}
                        <div className='w-full h-full group group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic4} alt='pic2' className=' border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>CV Generator</h3>
                                    <p className='text-white text-center sm:text-[18px] text-[8px] sm:mb-4 mb-[8px] sm:mx-5 mx-[12px]'>Created a CV builder that generates unique, shareable links for each CV, built with HTML, CSS, and JavaScript to offer a seamless, personalized experience.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px] text-white sm:py-2 py-0 px-1 sm:px-5 text-[8px] sm:text-[22px] sm:mb-4 mb-1 hoverMenu'><Link href={'https://resume-hackathon-milestone5-osamabinadnan.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 5th picture */}
                        <div className='w-full h-full group group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic6} alt='pic2' className=' border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>Weather App</h3>
                                    <p className='text-white text-center sm:text-[18px] text-[8px] sm:mb-4 mb-[8px] sm:mx-5 mx-[12px] '>Developed a dynamic weather app using HTML, CSS, and JavaScript, providing real-time weather updates and an intuitive user interface.</p>
                                    <Button className='bg-[#4ee247] rounded-[10px] text-white sm:py-2 py-0 px-1 sm:px-5 text-[8px] sm:text-[22px] sm:mb-4 mb-1 hoverMenu'><Link href={'https://forecast-today.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 6th picture */}
                        <div className='w-full h-full group group'>
                            <div className='relative overflow-hidden'>
                                <Image src={pic5} alt='pic2' className=' border-[#4ee247] border-solid border-[4px] rounded-[10px] w-full h-full'></Image>
                                <div className='absolute h-full w-full bg-black/80 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700  rounded-[10px]'>
                                    <h3 className='text-white font-bold sm:mb-4 mb-[4px] mt-[8px] text-center text-[18px] sm:text-[35px]'>More Projects <br /><span className='text-[#4ee247] text-[25px]'><em>Comming Soon</em></span></h3>
                                
                                </div>
                            </div>
                        </div>            
                        
                    </div>
            </div>
        </section>
    </>
  )
}