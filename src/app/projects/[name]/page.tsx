import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { getProject, getProjects } from '@/lib/projects';
import { NotFound } from '@/components/NotFound';

const ProjectLink = ({
  url,
  title,
  icon,
}: {
  url?: string;
  title?: string;
  icon?: React.ReactNode;
}) => {
  if (url) {
    return (
      <Link href={url} className='btn ring-2 ring-black hover:text-white' target='_blank'>
        {title}
        {icon}
      </Link>
    );
  }
  return (
    <div className='base-btn cursor-not-allowed bg-gray-400 line-through'>
      {title}
      {icon}
    </div>
  );
};

export const generateStaticParams = async () => {
  const projects = getProjects();
  return projects.map((project) => ({
    name: project.name,
  }));
};

export default function Page({ params: { name } }: { params: { name: string } }) {
  const project = getProject(name);
  if (!project) {
    return (
      <NotFound
        backLink='/projects'
        title={'Project not found'}
        description={'お探しのプロジェクトは存在しません。'}
      />
    );
  }
  return (
    <>
      <h1 className='my-2 text-center font-mono-jp text-5xl font-semibold'>
        {project.title}
      </h1>
      <p className='text-center font-sans-jp text-lg'>{project.description}</p>
      <div className='mt-8 flex justify-center gap-x-8 gap-y-4 max-sm:flex-col md:mt-5'>
        <div className='flex items-center p-4 md:justify-center'>
          <div className='group relative ml-auto'>
            <div className='flex cursor-pointer items-center justify-center rounded-b-md bg-black p-2 text-xl shadow-xl duration-300 hover:shadow-2xl md:rounded-full'>
              <FaProjectDiagram className='text-white' />
            </div>
            <div className='md:scale-80 absolute -top-9 z-10 flex w-40 break-keep rounded-t-md rounded-br-md bg-black p-2 text-center font-mono-jp text-sm text-white duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100 md:invisible md:w-fit md:-translate-x-1/4 md:justify-center md:rounded-xl md:px-1.5 md:py-1 md:opacity-0'>
              <p>公開日</p>
            </div>
          </div>
          <p className='ml-2 mt-2 max-sm:w-1/2 md:mt-0'>{project.cretedAt}</p>
        </div>
        <div className='flex items-center p-4 md:justify-center'>
          <div className='group relative ml-auto'>
            <div className='flex cursor-pointer items-center justify-center rounded-b-md bg-black p-2 text-xl shadow-xl duration-300 hover:shadow-2xl md:rounded-full'>
              <BiSolidCategoryAlt className='text-white' />
            </div>
            <div className='md:scale-80 absolute -top-9 z-10 flex w-40 break-keep rounded-t-md rounded-br-md bg-black p-2 text-center font-mono-jp text-sm text-white duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100 md:invisible md:w-fit md:-translate-x-1/4 md:justify-center md:rounded-xl md:px-1.5 md:py-1 md:opacity-0'>
              <p>ジャンル</p>
            </div>
          </div>
          <p className='ml-2 mt-2 max-sm:w-1/2 md:mt-0'>{project.genre}</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        <ProjectLink url={project.github} title='Code' icon={<FaGithub />} />
        <ProjectLink url={project.site} title='Site' icon={<FaLink />} />
      </div>
      <div className='h-divider relative mx-auto my-8 h-[1px] w-11/12 border-none bg-divider'>
        <h2 className='absolute left-[50%] -translate-x-1/2 -translate-y-1/2 justify-center bg-white text-center font-serif-jp text-3xl'>
          技術
        </h2>
      </div>
      <div className='container mx-auto my-5'>
        <div className='flex flex-wrap justify-center font-sans-jp'>
          {project.technology.map((str) => {
            return (
              <p className='m-1 p-1' key={str}>
                {str}
              </p>
            );
          })}
        </div>
        <div className='my-16 flex flex-wrap items-stretch justify-center gap-y-4'>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-success-500'>
              <p className='my-auto p-4 font-sans-jp'>{project.objective}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 font-mono-jp text-lg'>
                目的
              </h3>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-warning-500'>
              <p className='my-auto p-4 font-sans-jp'>{project.background}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 font-mono-jp text-lg'>
                背景
              </h3>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-primary-500'>
              <p className='my-auto p-4 font-sans-jp'>{project.commitment}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 font-mono-jp text-lg'>
                こだわり
              </h3>
            </div>
          </div>
        </div>
        <div className='w-full whitespace-pre-wrap break-words rounded-xl px-12 pb-4 pt-2 font-sans-jp text-lg shadow-lg'>
          <Markdown>{project.content}</Markdown>
        </div>
        <div className='relative m-4 mb-40 mt-20 rounded-xl border-2 border-double border-black'>
          <div className='absolute inset-x-0 -top-6 flex justify-center'>
            <h3 className='rounded-2xl bg-white px-4 text-center font-mono-jp text-2xl'>
              ギャラリー
            </h3>
          </div>
          <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2'>
            {project.gallery?.map((path) => {
              return (
                <Image
                  src={`/projects/${project.name}/${path}`}
                  alt={path}
                  id={path}
                  key={path}
                  className='!relative aspect-auto object-contain'
                  fill
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
