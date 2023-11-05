'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { LiaDownloadSolid } from 'react-icons/lia';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
      <motion.h1
        className="text-2xl sm:text-4xl mb-10 mt-4 px-4 text-center font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ilyas El Mabrouki.</span>{' '}
        I&apos;m a <span className="font-bold">full-stack developer</span>. I
        enjoy building sites & apps.
      </motion.h1>
      <motion.div
        className="flex justify-center items-center flex-col sm:flex-row gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex group outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition items-center gap-2 py-3 px-7 rounded-full text-white bg-gray-900"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/IlyasElMabrouki.pdf"
          download
          className="flex group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition items-center gap-2 py-3 px-7 rounded-full bg-white border border-black/10"
        >
          Download CV{' '}
          <LiaDownloadSolid className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          className="outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition rounded-full p-4 bg-white border border-black/10 text-gray-700 text-[1.35rem]"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/IlyasElMabrouki/"
          target="_blank"
          className="outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition rounded-full p-4 bg-white border border-black/10 text-gray-700 text-[1.35rem]"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
