import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import crypto from 'crypto';
import sharp from 'sharp';

export async function POST(req: Request) {
  try {
    // Generate a unique hash for the filename
    const hash = crypto.createHash('sha256').update(Date.now().toString()).digest('hex');
    const hashedFilename = `${hash}.webp`;

    // Read file data from request body
    const data = Buffer.from(await req.arrayBuffer());

    // Convert the image to WebP format using sharp
    const webpData = await sharp(data).webp().toBuffer();

    // Upload file to Vercel Blob, within the 'projects' folder
    const { url: fileUrl } = await put(`projects/${hashedFilename}`, webpData, {
      access: 'public',
      contentType: 'image/webp',
    });

    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
