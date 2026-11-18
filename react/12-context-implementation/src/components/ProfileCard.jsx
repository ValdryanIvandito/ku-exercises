import { useTheme } from "../context/theme";

export default function ProfileCard({ user }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={
        "flex-1 rounded-2xl border p-6 shadow-sm transition-colors " +
        (isDark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white")
      }
    >
      <h2 className="mb-4 text-lg font-bold">Your Profile</h2>

      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-xl font-semibold">
          {user.initials}
        </div>

        <div>
          <p className="text-lg font-semibold">{user.name}</p>

          <p
            className={
              "text-sm " + (isDark ? "text-slate-400" : "text-slate-500")
            }
          >
            {user.role}
          </p>
        </div>
      </div>

      <p
        className={
          "mt-6 text-sm " + (isDark ? "text-slate-400" : "text-slate-500")
        }
      >
        Current theme: <span className="font-semibold">{theme}</span>
      </p>
    </section>
  );
}
