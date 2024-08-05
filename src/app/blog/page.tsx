import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

export default function Blog() {
    return (
        <ThemeProvider>
            <Navbar />
            <div className='container space-y-6 py-6 lg:my-10 mt-16'>
                <h1>Ntar dulu ya hehe, capek</h1>
            </div>
        </ThemeProvider>
    );
}