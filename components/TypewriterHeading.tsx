"use client"

import { useEffect, useState } from "react"

export default function TypewriterHeading({
  text,
  className = "",
  speed = 70,
}: {
  text: string
  className?: string
  speed?: number
}) {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return (
    <h2 className={`${className}`}>
      {displayed}
      <span className="inline-block animate-caret w-[1ch]">&nbsp;</span>
    </h2>
  )
}
