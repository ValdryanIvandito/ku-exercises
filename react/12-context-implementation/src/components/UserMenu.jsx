export default function UserMenu({ user }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold">
        {user.initials}
      </div>
      <span className="text-sm font-medium">{user.name}</span>
    </div>
  );
}
