import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border dark:border-gray-700" title="Toggle Theme">
      <div className="relative h-5 w-5">
        <Sun className={`absolute h-5 w-5 transition-all ${theme === 'dark' ? 'scale-100 rotate-0 text-yellow-500' : 'scale-0 -rotate-90'}`} />
        <Moon className={`absolute h-5 w-5 transition-all ${theme === 'dark' ? 'scale-0 rotate-90' : 'scale-100 rotate-0 text-gray-700'}`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}