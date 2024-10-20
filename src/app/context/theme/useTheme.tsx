'use client'

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export function useTheme() {
    const context = useContext(ThemeContext)
    return context === undefined 
        ? (() => { throw new Error('useTheme must be used within a ThemeProvider')})()
        : context
}