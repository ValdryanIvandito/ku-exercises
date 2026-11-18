import NavItem from "./NavItem";

export default function Sidebar() {
  const items = ["Overview", "Reports", "Settings"];

  return (
    <nav className="flex w-48 flex-col gap-2">
      {items.map((label) => (
        <NavItem key={label} label={label} />
      ))}
    </nav>
  );
}
