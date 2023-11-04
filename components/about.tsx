'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Heading from './heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection('About');
  }, [inView, setActiveSection, timeOfLastClick]);

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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, tempora
        necessitatibus illum, possimus odio ipsum labore neque enim aut, maxime
        voluptates id voluptas natus! Vel quod, eveniet eaque, aliquam enim
        dolor nihil soluta incidunt debitis facere cum asperiores accusantium
        deleniti aut non qui doloribus quae quisquam veritatis temporibus.
      </p>
      <p>
        tempora velit! Atque vitae quae quia voluptatibus non iusto quos illo,
        minus expedita fugiat distinctio praesentium, accusamus maxime
        aspernatur molestias ipsum odio. Odio assumenda dignissimos ab hic
        dolores, ex repellendus? Commodi iste sequi nam? Sint, ipsum cum.
        Deserunt consequuntur nisi ducimus? Accusamus quidem asperiores illum
        corrupti culpa sunt provident deleniti sequi ipsam.
      </p>
    </motion.section>
  );
}
