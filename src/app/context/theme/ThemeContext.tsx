import { createContext } from "react"

export type Theme =  'light' | 'dark'

export type ThemeContextType = {
    theme: Theme
    toggleTheme: () => ThemeContextType | void 
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
