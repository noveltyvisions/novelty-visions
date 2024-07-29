'use client'

import { useRef, useState } from "react"
import { handleClick } from "../lib/helper"
import { useAnimation } from "@/hooks/useAnimation"

export default function NavBar() {


  const [navState, setNavState] = useState(false)
  const topBar = useRef()
  const midBar = useRef()
  const bottomBar = useRef()

  const navItems = [
    {
      text: 'Overview',
      link: '.over-view'
    },
    {
      text: 'Products',
      link: '.products'
    },
    {
      text: 'Services',
      link: '.services'
    },
    {
      text: 'About',
      link: '.about'
    },
    {
      text: 'Contact',
      link: '.contact'
    },
  ]

  function handleNavClick() {
    setNavState(prevState => !prevState)

    if(!navState) {
      topBar.current.style.top = "73%"
      topBar.current.style.left = "39%"
      topBar.current.style.transform = 'rotate(45deg) translateX(-40%)'

      midBar.current.style.width = "0%"
      topBar.current.style.width = "55%"
      bottomBar.current.style.width = "55%"
      
      bottomBar.current.style.bottom = "67%"
      bottomBar.current.style.left = "39%"
      bottomBar.current.style.transform = 'rotate(-45deg) translateX(-40%)'
    } else {
      midBar.current.style.width = "80%"
      topBar.current.style.width = "80%"
      bottomBar.current.style.width = "80%"

      topBar.current.style.top = "8px"
      topBar.current.style.left = "50%"
      topBar.current.style.transform = 'rotate(0deg) translateX(-50%)'

      bottomBar.current.style.bottom = "8px"
      bottomBar.current.style.left = "50%"
      bottomBar.current.style.transform = 'rotate(0deg) translateX(-50%)'

    }

  }

  useAnimation('.hero', '.hero-anim')

  return (
    <>
    <nav className="hidden anim-time hero-anim hero opacity-0 md:block transition-all rounded-full bg-primary py-4 px-8 fixed top-12 left-2/4 transform -translate-x-2/4 z-20">
      <ul className="flex items-center justify-center gap-12 mx-auto">
        {navItems.map((item, index) => (
          <li
            className={
              `font-lato cursor-pointer text-xl ${index === 4 ? 'text-primary bg-white rounded-full px-4 py-1' : 'text-white'}`
            } 
            onClick={() => handleClick(item.link)}
            key={index}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
    <nav className="block fixed top-12 right-2 border md:hidden">
      <div
        onClick={handleNavClick}
        className="border relative h-10 w-16 bg-white z-10"
      >
        <div 
          ref={topBar}
          className="absolute top-2 left-2/4 transform -translate-x-2/4 h-1 w-3/4 bg-primary transition-all" 
        />
        <div 
          ref={midBar}
          className="absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 h-1 w-3/4 bg-primary transition-all" 
        />
        <div 
          ref={bottomBar}
          className="absolute bottom-2 left-2/4 transform -translate-x-2/4 h-1 w-3/4 bg-primary transition-all" 
        />
      </div>
      {navState && (
        <ul className="fixed top-0 left-0 w-full h-screen border space-y-8 bg-primary z-0 pt-32 p-5">
          {navItems.map((item, index) => (
            <li
              className={
                `font-lato cursor-pointer text-4xl ${index === 4 ? 'text-white' : 'text-white'}`
              } 
              onClick={() => {
                handleNavClick()
                handleClick(item.link)
              }}
              key={index}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
    </>
  )
}
