import React from 'react'

export default function RichTextB({ highlightText, productName, className }) {
  return (
    <p className={`font-lato font-bold ${className}`}>
        <span className="text-primary">{'"'}</span>
        <span className="text-secondary">{highlightText}</span>
        <span className="text-primary">{'"'}</span>
        <span className="text-primary">-</span>
        <span className="text-primary">{productName}</span>
    </p>
  )
}
