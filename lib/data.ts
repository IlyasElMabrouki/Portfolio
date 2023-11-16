import React from 'react';
import { FaReact, FaPhp, FaJava } from 'react-icons/fa';
import { DiPhotoshop } from "react-icons/di";
import trelloProject from '@/public/Trello_project.jpg';
import ecomProject from '@/public/E-commerce_project.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Designer',
    location: 'Autovallez Maroc',
    description:
      'I successfully designed two flyers aimed at encouraging taxi drivers to leverage the advanced features available in the company\'s car services.',
    icon: React.createElement(DiPhotoshop),
    date: 'Aug 2021 · 1 mo',
  },
  {
    title: 'Java Application Developer',
    location: 'Kromberg & Schubert',
    description: 'I developed a Java application dedicated to efficiently managing the company\'s stock.',
    icon: React.createElement(FaJava),
    date: 'Aug 2021 · 1 mo',
  },
  {
    title: 'Full-Stack Developer',
    location: 'S-Car Chrono Service',
    description: 'I took charge of developing a web application using PHP to efficiently manage the time-related aspects of company employees, including attendance tracking, absence management, and holiday requests.',
    icon: React.createElement(FaPhp),
    date: 'May 2022 · 1 mo',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Godogi',
    description: 'I actively contributed to the realization of a fully functional e-commerce website.',
    icon: React.createElement(FaReact),
    date: 'July 2023 - Aug 2023 · 2 mos',
  },
] as const;

export const projectsData = [
  {
    title: 'AI-Trello Clone',
    description:
      'Effectively manage your tasks with drag-and-drop functionality, and simplifies the process of summarizing your daily tasks.',
    tags: ['React', 'Tailwind', 'Next.js', 'GPT-3', 'AppWrite'],
    imageUrl: trelloProject,
    deploymentUrl: 'https://ai-trello-clone-ilyaselmabrouki.vercel.app/',
  },
  {
    title: 'E-Commerce Website',
    description: 'Facilitate online product sales by offering users a catalog showcasing a range of available items for purchase.',
    tags: ['React', 'Next.js', 'Tailwind', 'MongoDB', 'PayPal', 'Stripe'],
    imageUrl: ecomProject,
    deploymentUrl: 'https://e-commerce-ilyaselmabrouki.vercel.app/',
  },
] as const;

export const skillsData = [
  'C',
  'C++',
  'Java',
  'HTML',
  'CSS',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'PHP',
  'MySQL',
  'MongoDB',
  'Prisma',
  'Git',
] as const;
