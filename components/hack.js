import React, { useEffect } from 'react'

const HackText = props => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  useEffect(() => {
    let iteration = 0
    const interval = setInterval(() => {
      const hackText = props.text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return props.text[index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')

      props.setText(hackText)

      if (iteration >= props.text.length) {
        clearInterval(interval)
      }

      iteration += 2
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return <>{props.children}</>
}

export default HackText
