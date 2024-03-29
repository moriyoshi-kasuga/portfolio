'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickAway from '@/lib/useClickAway';
import { FaHome, FaProjectDiagram, FaSearch } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import Link from 'next/link';
import { MenuButton } from './MenuButton';

export const routes = [
  {
    title: 'Home',
    href: '/',
    Icon: FaHome,
  },
  {
    title: 'About',
    href: '/about',
    Icon: FaSearch,
  },
  {
    title: 'Projects',
    href: '/projects',
    Icon: FaProjectDiagram,
  },
  {
    title: 'Skills',
    href: '/skills',
    Icon: FaComputer,
  },
];

export const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <MenuButton
        width={20}
        height={20}
        isOpen={isOpen}
        strokeWidth={4}
        onClick={() => setOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed left-0 right-0 top-[var(--header-height)] rounded-b-3xl p-5 backdrop-blur-sm'
          >
            <ul className='grid gap-2 p-3'>
              {routes.map((route, idx) => {
                const { title, href, Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={title}
                    className='w-full rounded-xl bg-gradient-to-tr p-[0.08rem]'
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex w-full items-center justify-between rounded-xl bg-zinc-200 p-5 '
                      }
                      href={href}
                    >
                      <span className='flex gap-1 font-mono-jp text-lg font-semibold'>
                        {title}
                      </span>
                      <Icon className='text-xl' />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
