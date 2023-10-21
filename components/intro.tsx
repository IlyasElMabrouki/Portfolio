'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { LiaDownloadSolid } from 'react-icons/lia';

export default function Intro() {
  const arrow = {
    initial: { x: 0 },
    animate: { x: 3 },
  };

  const download = {
    initial: { y: 0 },
    animate: { y: 3 },
  };

  const bounce = {
    initial: { scale: 1 },
    animate: {
      scale: 1.2,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              alt="profil"
              src="/profil.png"
              height="100"
              width="100"
              quality="100"
              priority={true}
              className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-lg"
            ></Image>
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="text-2xl sm:text-4xl mb-10 mt-4 px-4 text-center font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building sites & apps. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.ul
        className="flex justify-center items-center flex-col sm:flex-row gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <motion.li
          initial="initial"
          animate="initial"
          whileHover="animate"
          variants={bounce}
        >
          <Link
            href="#contact"
            className="flex items-center gap-2 py-3 px-7 rounded-full text-white bg-gray-900"
          >
            Contact me here{' '}
            <motion.span variants={arrow}>
              {' '}
              <BsArrowRight />
            </motion.span>
          </Link>
        </motion.li>
        <motion.li
          initial="initial"
          animate="initial"
          whileHover="animate"
          variants={bounce}
        >
          <a
            href="#"
            className="flex items-center gap-2 py-3 px-7 rounded-full bg-white"
          >
            Download CV{' '}
            <motion.span variants={download}>
              {' '}
              <LiaDownloadSolid />
            </motion.span>
          </a>
        </motion.li>
        <motion.li
          initial="initial"
          animate="initial"
          whileHover="animate"
          variants={bounce}
        >
          <a
            href="https://www.linkedin.com/feed/"
            className="flex items-center p-4 rounded-full bg-white text-gray-700"
          >
            <BsLinkedin />
          </a>
        </motion.li>
        <motion.li
          initial="initial"
          animate="initial"
          whileHover="animate"
          variants={bounce}
        >
          <a
            href="https://github.com/IlyasElMabrouki/"
            className="flex items-center p-4 rounded-full bg-white text-gray-700"
          >
            <AiFillGithub />
          </a>
        </motion.li>
      </motion.ul>
    </section>
  );
}
