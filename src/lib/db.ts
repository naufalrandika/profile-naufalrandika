// lib/db.ts
import { createClient } from '@vercel/postgres';

const client = createClient({
  connectionString: process.env.POSTGRES_URL, // Pastikan ini sesuai dengan variabel lingkungan di Vercel
});

export default client;
