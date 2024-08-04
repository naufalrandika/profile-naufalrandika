import Hero from "@/app/hero";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import ProgLanguages from "./progLanguages";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className='container space-y-6 py-6 lg:my-10 mt-16'>
        <Hero />
        <ProgLanguages />
      </div>
    </ThemeProvider>
  );
}
