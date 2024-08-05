import { useEffect } from "react"


export const useMultipleImageAnimation = (observeTarget, targets) => {

    useEffect(() => {
        const ourTargets = document.querySelectorAll(`${targets}`)
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    for(let i = 0; i < ourTargets.length; i++) {
                        setTimeout(() => {
                            ourTargets[i].style.opacity = 1
                        }, i * 200)
                    }
                    observer.disconnect(document.querySelector(`${observeTarget}`))
                }
            })
        }, { threshold: 0.8 })
        observer.observe(document.querySelector(`${observeTarget}`))
    }, [])
}