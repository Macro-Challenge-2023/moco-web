'use client';

import clsxm from '@/lib/clsxm';
import { useInView } from 'react-intersection-observer';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { FaQuestion } from 'react-icons/fa';
import Link from 'next/link';

export default function ExperienceContent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  return (
    <div className="max-w-6xl px-4 sm:px-6">
      <div
        ref={ref}
        className={clsxm(
          'flex items-center flex-col justify-center gap-y-8 transition-opacity opacity-0',
          inView && 'opacity-100 duration-1000',
        )}
      >
        <h2 className="h2">You got:</h2>
        <h1 className={clsxm('h1')}>
          Moco
        </h1>
        <HiOutlineArrowDown size={80} className="animate-bounce" />
        <Link
          href="https://google.com"
          className="p-6 bg-yellow-200 rounded-xl shadow-xl animate-wiggle"
        >
          <FaQuestion size={80} className="text-gray-600" />
        </Link>
      </div>
    </div>
  );
}
