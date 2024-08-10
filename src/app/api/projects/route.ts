import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const result = await sql`
      SELECT id, name, description, cover, web_url, created_at
      FROM projects
    `;

    const response = NextResponse.json(result.rows);
    response.headers.set('Cache-Control', 'no-store');

    return response;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
