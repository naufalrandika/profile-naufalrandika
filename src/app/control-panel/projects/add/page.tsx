'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProject() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [cover, setCover] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [webUrl, setWebUrl] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];
    
    // Upload cover image to Vercel Blob with hashed filename
    const uploadResponse = await fetch(`/api/projects/upload`, {
      method: 'POST',
      body: file,
    });
    
    if (!uploadResponse.ok) {
      throw new Error('Failed to upload image');
    }

    const { url } = await uploadResponse.json();
    setCover(url);

    // Save project details with cover URL to database
    const response = await fetch('/api/projects/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, cover: url, web_url: webUrl }),
    });

    if (response.ok) {
      router.push('/control-panel/projects'); // Redirect to the projects list page
    } else {
      alert('Failed to add project');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project Web URL"
        value={webUrl}
        onChange={(e) => setWebUrl(e.target.value)}
      />
      <input
        name="file"
        ref={inputFileRef}
        type="file"
        accept="image/*"
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
}
