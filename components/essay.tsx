'use client';
import { essaysData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectProps = (typeof essaysData)[number];

export default function Essay({
  title,
  description,
  tags,
  imageUrl,
  deploymentUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="rounded-lg bg-gray-100 max-w-2xl sm:h-[20rem] border border-black/5 overflow-hidden sm:group-even:pl-8 sm:pr-8 relative hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <a href={deploymentUrl} download>
          <div className="h-full flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag) => (
                <li
                  className="text-white dark:text-white/70 text-[0.7rem] bg-black/70 px-3 py-1 rounded-full uppercase tracking-wider"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl 
        group-even:right-[initial] 
        group-even:-left-40 

        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-hover:scale-[1.04]
        transition"
            src={imageUrl}
            alt={title}
            quality={95}
          ></Image>
        </a>
      </section>
    </motion.div>
  );
}
