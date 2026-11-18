import { useTheme } from "../context/theme";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function Layout({ user }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={
        "min-h-screen transition-colors " +
        (isDark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900")
      }
    >
      <Navbar user={user} />
      <Dashboard user={user} />
    </div>
  );
}
