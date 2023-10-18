'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';

export default function Header() {
  const [link, setLink] = useState<string>('Home');

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-500 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

{
  /*<div className="mx-auto flex justify-center gap-x-2 mt-4 sm:rounded-full bg-slate-300 px-4 py-1 w-full sm:w-max">
        <Link className={`${link == "Home" ? 'bg-slate-200' : ''} rounded-full p-2 `} href="" onClick={()=>setLink("Home")}>Home</Link>
        <Link className={`${link == "About" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("About")}>About</Link>
        <Link className={`${link == "Projects" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Projects")}>Projects</Link>
        <Link className={`${link == "Skills" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Skills")}>Skills</Link>
        <Link className={`${link == "Experience" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Experience")}>Experience</Link>
        <Link className={`${link == "Contact" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Contact")}>Contact</Link>
  </div>*/
}
