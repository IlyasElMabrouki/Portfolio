import { projectsData } from '@/lib/data';
import Project from './project';
import Heading from './heading';

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project}></Project>
        ))}
      </div>
    </section>
  );
}
