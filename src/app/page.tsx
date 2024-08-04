import Hero from "@/app/hero";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className='container space-y-6 py-6 lg:my-10 mt-16'>
        <Hero />
      </div>
    </ThemeProvider>
  );
}
