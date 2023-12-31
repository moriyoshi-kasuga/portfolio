import projects from '@/projects/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaProjectDiagram } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <div className='min-h-all'>
        <h1 className='flex justify-center gap-x-2 font-mono-jp text-5xl font-bold'>
          <FaProjectDiagram />
          Projects
        </h1>
        <div className='my-8 container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12'>
          {projects.map((project) => (
            <Link
              href={`/projects/${project.name}`}
              className='flex h-fit w-full flex-col rounded-2xl bg-primary-300 px-8 py-2'
              key={project.name}
            >
              <h2 className='text-center font-mono-jp text-2xl font-bold'>
                {project.title}
              </h2>
              <div className='relative my-2 aspect-square w-full'>
                <Image
                  src={`/projects/${project.name}/main.png`}
                  alt={project.title}
                  className='w-full rounded-xl object-cover'
                  fill
                  sizes='(100%,100%)'
                />
              </div>
              <div className='flex flex-wrap gap-x-2 text-lg items-start'>
                {project.technology.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-xl bg-warning-300 px-2 py-1 font-mono-jp font-thin text-default-900'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='px-4 py-2 break-words font-sans-jp text-xl'>
                {project.objective}
              </div>
              <span className='ml-auto font-serif-jp font-semibold'>
                {project.cretedAt}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
