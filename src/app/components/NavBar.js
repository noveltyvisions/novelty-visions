'use client'

import { handleClick } from "../lib/helper"

export default function NavBar() {

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

  return (
    <nav className="hidden md:block rounded-full bg-primary py-4 px-8 fixed top-12 left-2/4 transform -translate-x-2/4">
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
  )
}
