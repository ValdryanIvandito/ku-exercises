import { useTheme } from "../context/theme";

export default function NavItem({ label }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <a
      href="#"
      className={
        "rounded-lg px-4 py-2 font-medium transition-colors " +
        (isDark
          ? "text-slate-300 hover:bg-slate-800"
          : "text-slate-600 hover:bg-slate-200")
      }
    >
      {label}
    </a>
  );
}
