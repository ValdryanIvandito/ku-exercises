import { useState } from "react";
import { ThemeProvider } from "./context/theme";
import Layout from "./components/Layout";

export default function App() {
  const [user] = useState({
    name: "Ada Lovelace",
    role: "Administrator",
    initials: "AL",
  });

  return (
    <ThemeProvider initialTheme="dark">
      <Layout user={user} />
    </ThemeProvider>
  );
}
