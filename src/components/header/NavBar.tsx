'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    document.documentElement.classList.toggle('lock-scroll');
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="z-50">
      <button onClick={() => handleClick()} className="bg-gray-900 p-1 rounded md:hidden">
        <IoMenu className="w-6 h-fit" />
      </button>
      <NavLink isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => handleClick()}
        className={`${isOpen ? 'absolute' : 'hidden'} z-20 inset-0 bg-transparent`}
      ></div>
    </section>
  );
}

const services = ['Home', 'Blog', 'About', 'Contact', 'Services', 'Portfolio'];

function NavLink({ isOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const path = usePathname();

  return (
    <nav
      className={`absolute right-3 top-[58px] z-30 w-1/2 ${
        isOpen ? 'translate-x-0' : 'translate-x-[120%]'
      } transition-all duration-300 shadow-md shadow-gray-3 md:shadow-none bg-gray-800 rounded-lg overflow-hidden p-1 flex flex-col md:flex-row items-start gap-y-1 font-inter font-semibold text-sm md:text-xs
      md:inline-block md:top-0 md:relative md:translate-x-0 md:bg-transparent md:w-full
      `}
    >
      {services.map((v, i) => {
        const link = `/${i === 0 ? '' : v.toLowerCase()}`;

        return (
          <Link
            className={`w-full px-4 rounded-md py-3 hover:bg-gradient-to-r hover:from-cyan-700/50 hover:via-indigo-700/50 hover:to-cyan-700/50 md:hover:bg-none md:bg-none text-gray-200 md:hover:text-gray-100 ${
              path === link
                ? 'bg-gradient-to-r from-cyan-700/50 via-indigo-700/50 to-cyan-700/50 text-gray-100'
                : 'md:text-gray-400'
            }`}
            key={i}
            href={link}
          >
            {v}
          </Link>
        );
      })}
    </nav>
  );
}
