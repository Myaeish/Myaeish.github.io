import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button 
        onPointerDown={toggleTheme} 
        // Moved to bottom-right to avoid overlapping the Navbar Logo
        className={cn(
            "fixed bottom-6 right-6 z-[130] p-3 rounded-full transition-all duration-300",
            "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-xl",
            "focus:outline-none hover:scale-110 active:scale-90"
        )}
        aria-label="Toggle dark mode"
    > 
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-indigo-600" />
      )}
    </button>
  );
};