import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randi",
  description: "Anjayy Kelas Cemass :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class"> {/* Wrap your children with ThemeProvider */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
