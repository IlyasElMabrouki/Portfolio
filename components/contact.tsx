'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import Heading from './heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 100,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Heading>Contact Me</Heading>
      <p className="text-gray-600 -mt-5">
        Please contact me directly at{' '}
        <a href="mailto:ilyaselmabrouki7@gmail.com" className="underline">
          ilyaselmabrouki7@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className="flex flex-col gap-4 mt-10" action={sendEmail}>
        <input
          type="email"
          name="senderEmail"
          className="border border-black/10 rounded-lg bg-white h-14 p-5"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>
        <textarea
          name="message"
          className="border border-black/10 rounded-lg h-52 p-5"
          placeholder="Your message"
          required
          maxLength={500}
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 group focus:scale-110 active:scale-105 hover:scale-110 transition-all h-[3rem] w-[8rem] text-white bg-gray-900 hover:bg-gray-950 px-5 py-3 rounded-full outline-none"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
