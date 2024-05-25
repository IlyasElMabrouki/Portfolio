'use client';
import { essaysData } from '@/lib/data';
import Heading from './heading';
import { useSectionInView } from '@/lib/hooks';
import Essay from './essay';

export default function Essays() {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <Heading>My Essays</Heading>
      <div>
        {essaysData.map((essay) => (
          <Essay key={essay.title} {...essay}></Essay>
        ))}
      </div>
    </section>
  );
}