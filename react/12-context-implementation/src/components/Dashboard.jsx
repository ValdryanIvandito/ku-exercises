import Sidebar from "./Sidebar";
import ProfileCard from "./ProfileCard";

export default function Dashboard({ user }) {
  return (
    <main className="flex gap-6 p-6">
      <Sidebar />
      <ProfileCard user={user} />
    </main>
  );
}
