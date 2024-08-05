import Hero from "@/app/hero";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import ProgLanguages from "./progLanguages";
import Projects from "./projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className='container space-y-6 py-8 lg:my-10 mt-16'>
        <Hero />
        <div className="h-12"></div>
        <ProgLanguages />
        <div className="h-12"></div>
        <Projects />
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
