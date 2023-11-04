'use client';
import { projectsData } from '@/lib/data';
import Project from './project';
import Heading from './heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection('Projects');
  }, [inView, setActiveSection, timeOfLastClick]);

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
