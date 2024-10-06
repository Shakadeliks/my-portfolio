import { useTheme } from "../../context/theme/ThemeProvider"


export function ThemeToggle() {

    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className=""
        >
            {theme === 'light' ? '☀️' : '🌙'}
        </button>
    )
}