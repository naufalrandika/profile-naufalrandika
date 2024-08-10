import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: Request) {
  try {
    const { name, description, cover, web_url } = await req.json();

    const result = await sql`
      INSERT INTO projects (name, description, cover, web_url, created_at)
      VALUES (${name}, ${description}, ${cover}, ${web_url}, NOW())
      RETURNING id, name, description, cover, web_url, created_at
    `;

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
  }
}
