import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

export default function ContactItem({field, link, linkClassName, iconClassName, textClassName, isText, text, linkText}) {
  return (
    <a className={`!bg-primary flex flex-col space-y-2 items-center py-6 justify-center rounded-3xl ${linkClassName}`} href={`${link}`}>
      <PrismicNextImage 
        field={field}
        height={40}
        width={40}
        alt="phone"
        className={`${iconClassName}`}
      />
      <p className={`text-white font-lato ${textClassName}`}>
        {
          isText ?
          text
          :
          linkText
        }
      </p>
    </a>
  )
}
