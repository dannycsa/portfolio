import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Try to load from localStorage first
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      // If no theme stored, fallback to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-10 right-10 z-10 p-10 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-50" />
      ) : (
        <Moon className="h-6 w-6 text-blue-50" />
      )}
    </button>
  );
};
