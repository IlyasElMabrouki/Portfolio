'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import Heading from './heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center scroll-mt-20"
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
      <p className="text-gray-600 -mt-5 dark:text-white/80">
        Please contact me directly at{' '}
        <a href="mailto:ilyaselmabrouki7@gmail.com" className="underline">
          ilyaselmabrouki7@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="flex flex-col gap-4 mt-10 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent Successfully!');
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="border border-black/10 rounded-lg h-14 p-5 dark:bg-white dark:outline-none dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your email"
          required
          maxLength={500}
        ></input>
        <textarea
          name="message"
          className="border border-black/10 rounded-lg h-52 p-5 dark:bg-white dark:outline-none dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
