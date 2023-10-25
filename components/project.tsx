import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags }: ProjectProps) {
  return (
    <section className="bg-gray-200/50 w-full h-52 my-4 rounded-lg">
      <p>{title}</p>
      <p>{description}</p>
      <div className='flex gap-x-2'>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </section>
  );
}
