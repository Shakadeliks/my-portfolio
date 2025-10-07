'use client'

import { useEffect, useState } from "react"


const fonts= [
    'font-fredoka',
    'font-sigmar',
    'font-darumadrop',
    'font-grechen',
    'font-playfair',
    'font-heebo',
    'font-jacquard',
    'font-delicious',
    'font-lilita',
    'font-pacifico' 
]

export function Name() {
    const [currentFontIdx, setCurrentFontIdx] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFontIdx((prevIdx) => (prevIdx + 1) % fonts.length)
            console.log('font changed')
        }, 150)

        return () => clearInterval(intervalId)
    }, [])


    return (
        <h1 className={`${fonts[currentFontIdx]}`}>Olwethu "Shak" Matiwana</h1>
    )
}