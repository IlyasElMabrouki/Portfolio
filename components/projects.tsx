import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
  return (
    <section>
      {projectsData.map((project) => (
        <Project key={project.title} {...project}></Project>
      ))}
    </section>
  );
}
