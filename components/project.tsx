import { projectsData } from '@/lib/data';
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <section className="flex bg-gray-200/50 hover:bg-gray-200 w-full sm:max-w-2xl min-h-max my-4 rounded-lg transition">
      <div className="w-full h-full p-5 sm:w-1/2">
        <h3 className="text-2xl font-bold pb-3">{title}</h3>
        <p className="pb-3 sm:pb-10">{description}</p>
        <ul className="flex flex-wrap gap-3 ">
          {tags.map((tag) => (
            <li
              className="text-slate-200 text-[0.7rem] bg-gray-700 px-4 py-1 rounded-full uppercase"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:block h-full sm:w-1/2 sm:relative">
        <Image
          className='absolute top-5 left-20'
          src={imageUrl}
          alt="project image"
        ></Image>
      </div>
    </section>
  );
}
