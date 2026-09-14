import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import { useTiks } from "@rexa-developer/tiks/react";

export default function ModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const { click: tiksClick, setTheme: tiksSetTheme, setVolume: tiksSetVolume } = useTiks();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    tiksSetTheme('arcade')
    tiksSetVolume(1.0)
    tiksClick()

    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList[newIsDark ? 'add' : 'remove']('dark')
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "d" && !event.repeat) {
        toggleTheme()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDark])

  return (
    <Tooltip>
      <TooltipTrigger delay={100} render={
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      } />
      <TooltipContent side="bottom" className="px-3 py-2 text-sm gap-3">
        Toggle Mode <Kbd className="rounded border border-muted-foreground/10">D</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}