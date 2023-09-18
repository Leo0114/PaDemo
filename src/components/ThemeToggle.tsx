import { useEffect, useState } from "preact/hooks";
import { DarkSh, MoonSht } from "@components/layout/LosIconos";

export default function ThemeToggle() {
  if (typeof window !== "undefined") {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ?? "light"
    );

    const handleClick = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);

    return (
      <button
        onClick={handleClick}
        className=" mx-auto flex-row justify-center dark:text-slate-200 text-slate-950  transition-all cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700
        focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg
         px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55
          mr-2 mb2 hover:shadow-lg  duration-300 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100"
        aria-label="Modo oscuro"
      >
        {theme === "light" ? <MoonSht /> : <DarkSh />}
      </button>
    );
  }
}
