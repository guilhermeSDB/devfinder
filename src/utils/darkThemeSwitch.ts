import { Theme } from "@/types/theme";

// Initial Theme Check
export function themeCheck() {
  if (localStorage) {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      return Theme.DARK;
    }

    return Theme.LIGHT;
  }
}

// Manual Theme Switch
export function themeSwitch() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return Theme.LIGHT;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  return Theme.DARK;
}
