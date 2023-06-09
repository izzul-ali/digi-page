import Link from 'next/link';
import footerService from '~/constan/footer-service';
import ScrollToTop from './ScrollToTop';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiOutlineSend } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
import { RxStitchesLogo } from 'react-icons/rx';

export default function Footer() {
  return (
    <footer className="pt-5 lg:pt-12 border-t border-gray-900">
      <section className="md:px-7 lg:px-14 lg:mb-10 lg:flex justify-between">
        <Form />
        <div className="lg:w-3/5 xl:w-1/2 grid grid-cols-3 px-3 my-10 lg:my-0">
          {footerService.map((obj, i) => (
            <div key={i} className="">
              <h5 className="text-sm md:text-base text-gray-200 font-heading font-semibold mb-4">
                {Object.keys(obj)[0].replace('_', ' ')}
              </h5>
              <div className="text-gray-400 space-y-4 text-xs md:text-sm font-inter">
                {Object.values(obj).map((value) => {
                  return (value as string[]).map((link) => (
                    <Link key={link} href={`/${link.toLowerCase().replace(/ /g, '')}`} className="block">
                      {link}
                    </Link>
                  ));
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SocialMedia />
    </footer>
  );
}

export function Form() {
  return (
    <section className="lg:order-1 px-3 w-3/5 lg:w-2/5">
      <div className="flex items-center gap-x-1">
        <RxStitchesLogo className="text-cyan-400 w-7 h-fit" />
        <h3 className="text-xl font-heading font-semibold">DigiPage</h3>
      </div>
      <p className="text-sm text-gray-400 mt-2 font-inter">
        Let{"'"}s start a project and talk to schedule further with our team
      </p>
      <form className="border bg-cyan-600 border-gray-500 rounded-full overflow-hidden w-fit flex items-center mt-3 font-inter">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-900 p-2 border-none text-sm text-gray-300 placeholder:text-xs placeholder:text-gray-400"
        />
        <button type="button" className="p-2">
          <AiOutlineSend />
        </button>
      </form>
    </section>
  );
}

function SocialMedia() {
  return (
    <section className="px-3 pt-4 pb-3 md:px-7 lg:px-14 border-t border-gray-300 flex justify-between items-center text-gray-400 font-inter">
      <div className="flex items-center gap-x-1">
        <BiCopyright className="w-3 h-fit" />
        <p className="text-[0.6rem] sm:text-xs text-gray-300">2023 DigiPage. All Rights Reserved</p>
      </div>
      <div className="flex items-center gap-x-2 text-gray-400">
        <AiFillInstagram className="p-1 rounded-full w-5 sm:w-6 h-fit border border-gray-400" />
        <AiFillLinkedin className="p-1 rounded-full w-5 sm:w-6 h-fit border border-gray-400" />
        <AiFillYoutube className="p-1 rounded-full w-5 sm:w-6 h-fit border border-gray-400" />
        <ScrollToTop />
      </div>
    </section>
  );
}
