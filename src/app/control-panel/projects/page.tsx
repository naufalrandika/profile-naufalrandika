'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  description: string;
  cover: string;
  web_url: string | null;
  created_at: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to fetch projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      {error && <p>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.cover && <Image src={project.cover} alt={project.name} width={300} height={200} />}
            {project.web_url && <p><a href={project.web_url} target="_blank" rel="noopener noreferrer">Visit Project</a></p>}
            <p>Uploaded on: {new Date(project.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
