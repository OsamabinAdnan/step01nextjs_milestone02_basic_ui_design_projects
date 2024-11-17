'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    // State to control mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
    <nav className=' navbar'>
        <div className='linkDiv container'>
          <Link href={'/'} className='logoLink'>OsamabinAdnan <p className="logoBlink animate-pulse ease-in-out duration-1000"></p></Link>

          <div className= {`${isOpen? 'flex':'hidden'} menuLinkDiv`}>
            <Link href={'/'} className=' menuLinks hoverMenu'>Home</Link>
            <Link href={'/About'} className='menuLinks hoverMenu'>About</Link>
            <Link href={'/Services'} className='menuLinks hoverMenu'>Services</Link>
            <Link href={'/Portfolio'} className='menuLinks hoverMenu'>Portfolio</Link>
            <Link href={'/Contact'} className='menuLinks hoverMenu'>Contact</Link>
          </div>

          <div className='btnDiv '>
            <Button className='btnMenu' onClick={()=>{setIsOpen(!isOpen)}}>
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
        <span className='bgBlurEffect'></span>
        </span>
    </nav>
    </>
  )
}
