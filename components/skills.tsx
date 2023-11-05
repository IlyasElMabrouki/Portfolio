'use client';
import { useSectionInView } from '@/lib/hooks';
import Heading from './heading';
import { skillsData } from '@/lib/data';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Heading>My Skills</Heading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill) => (
          <li
            className="px-5 py-3 rounded-xl border border-black/[0.1]"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
