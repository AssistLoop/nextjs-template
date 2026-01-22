"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full border border-border p-1 bg-muted/50">
        <button className="px-3 py-1.5 rounded-full text-xs font-medium">
          <Sun className="h-3.5 w-3.5 inline mr-1.5" />
          Light
        </button>
        <button className="px-3 py-1.5 rounded-full text-xs font-medium">
          <Moon className="h-3.5 w-3.5 inline mr-1.5" />
          Dark
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1 bg-muted/50">
      <button
        onClick={() => setTheme("light")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          theme === "light"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-3.5 w-3.5 inline mr-1.5" />
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          theme === "dark"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-3.5 w-3.5 inline mr-1.5" />
        Dark
      </button>
    </div>
  )
}
