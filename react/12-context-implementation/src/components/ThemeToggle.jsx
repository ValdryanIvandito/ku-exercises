import { useTheme } from "../context/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={
        "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
        (isDark
          ? "bg-slate-700 text-yellow-300 hover:bg-slate-600"
          : "bg-slate-200 text-slate-700 hover:bg-slate-300")
      }
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
