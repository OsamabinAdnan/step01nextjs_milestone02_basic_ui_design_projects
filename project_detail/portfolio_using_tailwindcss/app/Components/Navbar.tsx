'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    // State to control mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
    <nav className=' p-3 sm:p-6 flex md:justify-between md:items-center shadow-lg max-w-[100%]'>
        <div className='mx-auto container flex justify-between items-center gap-10 lg:flex-row flex-col'>
          <Link href={'/'} className=' sm:text-2xl text-xl font-bold text-black hover:scale-[1.15] transition-all duration-500'>OsamabinAdnan <p className="relative inline-flex rounded-full h-3 w-3 bg-red-700 top-[-20]  left-[-12] animate-pulse ease-in-out duration-1000"></p></Link>

          <div className= {`${isOpen? 'flex':'hidden'} flex-col md:flex md:flex-row gap-4`}>
            <Link href={'/'} className=' hover:text-black lg:text-xl md:text-lg sm:text-lg  font-bold  hoverMenu'>Home</Link>
            <Link href={'/About'} className='hover:text-black lg:text-xl md:text-lg sm:text-lg  font-bold  hoverMenu'>About</Link>
            <Link href={'/Services'} className='hover:text-black lg:text-xl md:text-lg sm:text-lg  font-bold  hoverMenu'>Services</Link>
            <Link href={'/Portfolio'} className='hover:text-black lg:text-xl md:text-lg sm:text-lg  font-bold  hoverMenu'>Portfolio</Link>
            <Link href={'/Contact'} className='hover:text-black lg:text-xl md:text-lg sm:text-lg  font-bold  hoverMenu'>Contact</Link>
          </div>

          <div className='md:hidden flex items-center '>
            <Button className='bg-[#4ee247]' onClick={()=>{setIsOpen(!isOpen)}}>
              {isOpen? (
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100" x2="100" y2="0" stroke-width="20" stroke="black"/>
                <line x1="0" y1="0" x2="100" y2="100" stroke-width="20" stroke="black"/>
                </svg>
              ):(
                <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20" rx="10"></rect>
                <rect y="30" width="100" height="20" rx="10"></rect>
                <rect y="60" width="100" height="20" rx="10"></rect>
                </svg>
              )}
            </Button>
          </div>
        </div>
        <span>
        <span className='absolute lg:w-[600px] lg:h-[600px] md:w-[380px] md:h-[380px] w-[220px] h-[350px] bg-[#4ee247] top-[-20%] left-[-10%] rounded-full blur-[50px] opacity-100 -z-10'></span>
        </span>
    </nav>
    </>
  )
}
