'use client'

import { ReactNode, useContext, useEffect, useState } from "react"
import { Theme, ThemeContext, ThemeContextType } from "./ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null

        storedTheme 
            ? setTheme(storedTheme)
            : window.matchMedia('(prefers-color-scheme: dark)').matches
                ? setTheme('dark')
                : setTheme('light')
    }, [])

    useEffect(() => {
        theme === 'dark'
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')

        localStorage.setItem('theme', theme)
    }, [theme])

    const contextValue: ThemeContextType = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children} 
        </ThemeContext.Provider>
    )

}

export function useTheme() {
    const context = useContext(ThemeContext)
    return context === undefined 
        ? (() => { throw new Error('useTheme must be used within a ThemeProvider')})()
        : context
}