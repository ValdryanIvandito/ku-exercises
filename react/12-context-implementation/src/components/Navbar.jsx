import { useTheme } from "../context/theme";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

export default function Navbar({ user }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header
      className={
        "flex items-center justify-between px-6 py-4 border-b " +
        (isDark ? "border-slate-700" : "border-slate-200")
      }
    >
      <h1 className="text-xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <UserMenu user={user} />
      </div>
    </header>
  );
}
