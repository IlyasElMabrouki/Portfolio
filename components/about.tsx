'use client';
import { motion } from 'framer-motion';
import Heading from './heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 text-center max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        Hi I&apos;m Ilyas El Mabrouki, I&apos;m Full-Stack Developer and student
        specializing in Software Engineering and Distributed Information Systems
        at ENSET Mohammedia. My core stack is React, Next.js, Node.js, and
        MongoDB. I am also familiar with TypeScript.
      </p>
      <p className="mb-5">
        Continuous improvement is a significant advantage that I leverage not
        only in my professional endeavors but also in my personal life. I am
        dedicated to consistently striving to become a better version of myself.
      </p>
      <p className="italic">
          &ldquo;One step at a time is all it takes to get you there&ldquo;
      </p>
      <p className="font-bold">Emily Dickinson</p>
    </motion.section>
  );
}
