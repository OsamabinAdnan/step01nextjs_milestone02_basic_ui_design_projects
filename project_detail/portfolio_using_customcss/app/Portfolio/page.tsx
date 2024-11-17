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
                
            <div className=" mainPortfolioDiv">

                    {/* Blur effect backside */}
                    
                    <span className='bgBlurEffect3'></span>
                    
                    <h1 className='h1Portfolio'>My<span className='text-[#4ee247]'> Portfolio</span> </h1>
                    {/* 1st picture */}
                    <div className='portfolioMainInnerDiv'>
                        <div className='picturePortfolioOuterDiv group  '>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic1} alt='pic1' className='portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>Portfolio Website</h3>
                                    <p className='portfolioInnerDivBlackShadeParatag '> Developed a portfolio website by converting a Figma design into a responsive site using Next.js, Tailwind CSS, and Shadcn UI</p>
                                    <Button className='portfolioInnerDivBlackShadeBtn hoverMenu'><Link href={'https://portfolio-website-figma.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 2nd picture */}
                        <div className='picturePortfolioOuterDiv group'>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic2} alt='pic2' className='portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>VR Zone</h3>
                                    <p className='portfolioInnerDivBlackShadeParatag'> Built a VR website by converting a Figma design with Next.js, Tailwind CSS, and Shadcn UI.</p>
                                    <Button className='portfolioInnerDivBlackShadeBtn hoverMenu'><Link href={'https://vrzone.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 3rd picture */}
                        <div className='picturePortfolioOuterDiv group'>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic3} alt='pic2' className=' portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>Financial Dashboard</h3>
                                    <p className='portfolioInnerDivBlackShadeParatag'> Developed a Financial Dashboard website by following the Next.js official course, utilizing Next.js, and Tailwind CSS for a clean and responsive interface.</p>
                                    <Button className='portfolioInnerDivBlackShadeBtn hoverMenu'><Link href={'https://financialdashboard-assignment.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 4th picture */}
                        <div className='picturePortfolioOuterDiv group'>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic4} alt='pic2' className=' portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>CV Generator</h3>
                                    <p className='portfolioInnerDivBlackShadeParatag'>Created a CV builder that generates unique, shareable links for each CV, built with HTML, CSS, and JavaScript to offer a seamless, personalized experience.</p>
                                    <Button className='portfolioInnerDivBlackShadeBtn hoverMenu'><Link href={'https://resume-hackathon-milestone5-osamabinadnan.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 5th picture */}
                        <div className='picturePortfolioOuterDiv group'>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic6} alt='pic2' className=' portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>Weather App</h3>
                                    <p className='portfolioInnerDivBlackShadeParatag'>Developed a dynamic weather app using HTML, CSS, and JavaScript, providing real-time weather updates and an intuitive user interface.</p>
                                    <Button className='portfolioInnerDivBlackShadeBtn hoverMenu'><Link href={'https://forecast-today.vercel.app/'} target='blank'>View project</Link></Button>
                                </div>
                            </div>
                        </div>
                        {/* 6th picture */}
                        <div className='picturePortfolioOuterDiv group'>
                            <div className='picturePortfolioMiddleDiv'>
                                <Image src={pic5} alt='pic2' className=' portfolioMiddleDivImage'></Image>
                                <div className='portfolioInnerDivBlackShade group-hover:bottom-0  group-hover:opacity-100'>
                                    <h3 className='portfolioInnerDivBlackShadeh3tag'>More Projects <br /><span className='text-[#4ee247] text-[25px]'><em>Comming Soon</em></span></h3>
                                
                                </div>
                            </div>
                        </div>            
                        
                    </div>
            </div>
        </section>
    </>
  )
}