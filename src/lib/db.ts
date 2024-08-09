import { Client } from '@vercel/postgres';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to Vercel Postgres');
  } catch (error) {
    console.error('Failed to connect to Vercel Postgres', error);
  }
};

export default client;
