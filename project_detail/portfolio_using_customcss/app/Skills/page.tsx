'use client'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
    
  return (
    <>    
        <div className='skillsMainDiv'>
            <div className='skillsInnerDivofMainDiv'>
                    <h1 className='skillsInnerDivh1'>Skills</h1>
            </div>
                <h2 className='h2Skills'>Digital Marketing</h2>
                <div className="progressBarDiv">
                    <div>
                        <h3 className='h3progressBarHeading'>WordPress Development</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Elementor Page Builder</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>SearchEngine Optimization</h3>
                        <ProgressBar
                        completed={82}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted3"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Social Media MKT</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Ecommerce</h3>
                        <ProgressBar
                        completed={88}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted4"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Search Engine MKT</h3>
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
                        <h3 className='h3progressBarHeading'>HTML</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>CSS</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>JavaScript</h3>
                        <ProgressBar
                        completed={80}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted5"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Tailwind CSS</h3>
                        <ProgressBar
                        completed={90}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted1"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>Figma</h3>
                        <ProgressBar
                        completed={85}
                        className="wrapper"
                        barContainerClassName="progressContainer"
                        completedClassName="barCompleted2"
                        labelClassName="label"
                        />
                    </div>
                    <div>
                        <h3 className='h3progressBarHeading'>NextJS</h3>
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