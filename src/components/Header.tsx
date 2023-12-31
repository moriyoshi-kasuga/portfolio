'use client';
import { FaHome, FaProjectDiagram, FaRegCommentAlt, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FaComputer } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex h-[var(--header-height)] w-screen items-center py-2 backdrop-blur-md transition-colors-opacity'>
      <nav className='container relative mx-auto flex items-center justify-between'>
        <Link
          href='/'
          className='absolute aspect-square h-full scale-125 transition-transform hover:scale-150 max-md:left-[50%]'
        >
          <Image
            src={'/mori.png'}
            alt='My Avatar'
            className='rounded-full object-cover'
            fill
            sizes='(100%,100%)'
          />
        </Link>

        <div className='ml-auto hidden items-center space-x-6 font-mono text-xl md:flex'>
          <Link href='/' className='link-hover-animation'>
            <FaHome className='mr-1' />
            <span>Home</span>
          </Link>
          <Link href='/about' className='link-hover-animation'>
            <FaSearch className='mr-1' />
            <span>About</span>
          </Link>
          <Link href='/projects' className='link-hover-animation'>
            <FaProjectDiagram className='mr-1' />
            <span>Projects</span>
          </Link>
          <Link href='/skills' className='link-hover-animation'>
            <FaComputer className='mr-1' />
            <span>Skills</span>
          </Link>
        </div>
        <div className='ml-auto flex items-center md:hidden'>
          <FaRegCommentAlt size={32} />
        </div>
      </nav>
    </header>
  );
}
