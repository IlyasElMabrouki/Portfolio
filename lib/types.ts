import { links } from '@/lib/data';

export type Section = (typeof links)[number]['name'];

export type Theme = 'light' | 'dark';
