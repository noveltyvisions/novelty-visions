import React from 'react'
import RichText from './RichText'

export default function BlockA({slice, bg, className, textColor, title}) {
  return (
    <div
        className={
            `rounded-3xl flex flex-col items-center justify-center py-8 px-1 space-y-8 w-[90%] sm:w-[66%] max-w-[900px] ${bg} ${className}`
        }
    >
        <RichText 
        text={title}
        className="uppercase text-secondary custom-shadow text-3xl font-lato"
        />
        <div 
        className="flex flex-col items-center space-y-6 justify-center"
        >
        {slice.map(item => {
            return (
            <div className="flex flex-col items-center justify-center" key={item.title}>
                <RichText 
                className={
                    `text-center text-xl font-bold font-lato ${textColor} uppercase tracking-tight`
                }
                text={item.title}
                />
                <RichText 
                className={
                    `text-center w-[90%] sm:w-4/5 font-openSans text-base sm:text-lg tracking-tighter font-semibold ${textColor}`
                }
                text={item.description}
                />
            </div>
            )
        })}
        </div>
    </div>
  )
}
