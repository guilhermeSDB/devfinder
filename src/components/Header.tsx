import { Theme } from "@/types/theme";
import { themeCheck, themeSwitch } from "@/utils/darkThemeSwitch";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();

  function handleSwitchTheme() {
    themeSwitch();
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const actualTheme = themeCheck();
    if (actualTheme === Theme.LIGHT) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="my-0 flex w-full items-center justify-between md:my-8">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <div className="flex items-center justify-center gap-4">
        <button
          className="flex items-center gap-4"
          onClick={() => handleSwitchTheme()}
        >
          {isDarkMode ? (
            <>
              CLARO
              <Sun className="h-5 w-5" />
            </>
          ) : (
            <>
              ESCURO
              <Moon className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
