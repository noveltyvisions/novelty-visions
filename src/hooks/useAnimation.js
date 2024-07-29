'use client'
import { useEffect } from "react"

export const useAnimation = (defaultValue, animateValue, isScale) => {

    useEffect(() => {

        const observer = new IntersectionObserver(entry => {
            entry.forEach(entires => {
                if(entires.isIntersecting) {
                    document.querySelectorAll(`${animateValue}`).forEach(item => {

                        item.style.opacity = '1'
                        {isScale && (item.style.scale = 1)}

                    })
                    observer.disconnect(document.querySelector(`${defaultValue}`))
                }
            })
        }, { threshold: 0.5})

        observer.observe(document.querySelector(`${defaultValue}`))

    }, [])

}