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
    <section>
      <div className="flex flex-col gap-y-4 w-full items-center justify-center">
        <div className='relative'>
          <Image
            alt="profil"
            src="/profil.png"
            height="100"
            width="100"
            quality="100"
            priority={true}
            className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-lg"
          ></Image>
          <span className='text-4xl absolute bottom-0 right-0'>👋</span>
        </div>
        <p className="text-2xl sm:text-3xl px-10 max-w-3xl text-center leading-relaxed">
          <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m a{' '}
          <span className="font-bold">full-stack developer</span> with{' '}
          <span className="font-bold">8 years</span> of experience. I enjoy
          building sites & apps. My focus is{' '}
          <span className="underline">React (Next.js)</span>.
        </p>
        <ul className="flex justify-center items-center flex-col sm:flex-row gap-4 mt-4 max-w-2xl">
          <motion.li
            initial="initial"
            animate="initial"
            whileHover="animate"
            variants={bounce}
          >
            <Link
              href="#"
              className="flex justify-center items-center gap-x-3 text-xl font-medium py-3 px-5 rounded-full text-slate-100 bg-slate-950"
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
            <Link
              href="#"
              className="flex justify-center items-center gap-x-3 text-xl font-medium py-3 px-5 rounded-full text-slate-950 bg-slate-100"
            >
              Download CV{' '}
              <motion.span variants={download}>
                {' '}
                <LiaDownloadSolid />
              </motion.span>
            </Link>
          </motion.li>
          <motion.li
            initial="initial"
            animate="initial"
            whileHover="animate"
            variants={bounce}
          >
            <Link
              href="#"
              className="text-xl font-medium py-3 px-5 rounded-full text-slate-950 bg-slate-50 flex justify-center items-center"
            >
              <BsLinkedin />
            </Link>
          </motion.li>
          <motion.li
            initial="initial"
            animate="initial"
            whileHover="animate"
            variants={bounce}
          >
            <Link
              href="#"
              className="text-xl font-medium py-3 px-5 rounded-full text-slate-950 bg-slate-50 flex justify-center items-center"
            >
              <AiFillGithub />
            </Link>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
