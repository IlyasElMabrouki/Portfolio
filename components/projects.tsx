'use client';
import { projectsData } from '@/lib/data';
import Project from './project';
import Heading from './heading';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project}></Project>
        ))}
      </div>
    </section>
  );
}
