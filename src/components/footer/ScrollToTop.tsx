'use client';

import { useCallback } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

export default function ScrollToTop() {
  const scroll = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  return (
    <button onClick={() => scroll()} className="text-[0.6rem] sm:text-xs font-inter text-gray-300 flex items-center">
      Back to top <BsArrowUpShort className="w-4 h-fit" />
    </button>
  );
}
