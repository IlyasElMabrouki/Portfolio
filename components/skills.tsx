'use client';
import { useSectionInView } from '@/lib/hooks';
import Heading from './heading';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Skills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 100,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const { ref } = useSectionInView('Skills');
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Heading>My Skills</Heading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="px-5 py-3 rounded-xl border border-black/[0.1] dark:bg-white/10 dark:text-white/80"
            key={skill}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
