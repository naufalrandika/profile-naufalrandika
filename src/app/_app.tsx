import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { connectDB } from '@/lib/db';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    connectDB();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
