'use client'

export const handleClick = (link) => {
    document.querySelector(`${link}`).scrollIntoView({behavior: 'smooth'})
}