'use client';
import React, { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  devpostLink?: string;
  doraLink?: string;
  image: string;
}

function projectItem(project: Project, index: string) {
  return (
    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <p className="text-gray-500 mb-2">
          Tech Stack: {project.techStack.join(', ')}
        </p>
        <div className="mt-2 flex justify-between">
          <Link href={project.githubLink} className="text-blue-500 hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">GitHub</Link>
          {project.devpostLink ? (
            <Link href={project.devpostLink} className="text-blue-500 hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Devpost</Link>
          ) : (
            project.doraLink && (
              <Link href={project.doraLink} className="text-blue-500 hover:underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Dora</Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/fetch-projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Hero />
      <div className="w-full overflow-x-hidden flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => projectItem(project, index.toString()))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;