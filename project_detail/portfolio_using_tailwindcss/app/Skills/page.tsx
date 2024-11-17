'use client'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
    
  return (
    <>    
        <div className='sm:p-[50px] p-[30px] max-w-full h-auto justify-center items-center lg:flex-row flex-col-reverse lg:gap-[20px] gap-[40px] lg:text-ellipsis'>
            <div className='flex justify-center items-center my-[75px]'>
                    <h1 className='text-black text-[65px] font-extrabold font-[montserrat]'>Skills</h1>
            </div>
                <h2 className='flex lg:text-[40px] md:text-[32px] text-[24px] font-bold my-[30px] bg-gradient-to-r from-[black] via-[#4ee247] to-[black] text-transparent bg-clip-text justify-center'>Digital Marketing</h2>
                <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>WordPress Development</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Elementor Page Builder</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>SearchEngine Optimization</h3>
                        <ProgressBar
                        completed={82}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted3"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Social Media MKT</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Ecommerce</h3>
                        <ProgressBar
                        completed={88}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted4"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Search Engine MKT</h3>
                        <ProgressBar
                        completed={93}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted4"
                        labelClassName="label"
                        />
                    </div>
                </div>
                <h2 className='h2Skills'>Frontend Development</h2>
                <div className="progressBarDiv">
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>HTML</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>CSS</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>JavaScript</h3>
                        <ProgressBar
                        completed={80}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted5"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Tailwind CSS</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>Figma</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='lg:text-[30px] md:text-[20px] text-[15px] font-bold'>NextJS</h3>
                        <ProgressBar
                        completed={75}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted6"
                        labelClassName="label"
                        />
                    </div>
                </div>
        </div>
    </>
  )
}