import Image from 'next/image';
import Image4 from '../assets/photo-4.jpg';
import Image5 from '../assets/photo-5.jpg';
import Image3 from '../assets/photo-3.jpg';
import { IoPlay } from 'react-icons/io5';

export default function Hero() {
  return (
    <section className="text-center mt-10">
      <h1 className="font-heading font-bold text-3xl lg:text-4xl">
        We help grow your company <br /> marketing with digital platform
      </h1>
      <p className="text-gray-400 text-sm mt-3 font-inter font-semibold leading-normal lg:w-3/4 lg:mt-5 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, suscipit mollitia! Quis nesciunt iure
        mollitia porro provident ad eos deleniti consequuntur nostrum? Vitae, veniam hic sapiente voluptates maxime
        eius? A!
      </p>
      <div className="font-inter flex items-center justify-center gap-x-6 mt-7 text-sm font-semibold">
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-700/50 via-indigo-700/50 to-cyan-700/50 hover:scale-105 transition-all duration-200">
          Get started
        </button>
        <button className="pr-5 rounded-full flex items-center gap-x-2 shadow-md shadow-gray-900 hover:shadow-gray-800">
          <span className="p-2 rounded-full border border-gray-200">
            <IoPlay />
          </span>
          <p>See our works</p>
        </button>
      </div>
      <HeroImages />
    </section>
  );
}

function HeroImages() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-x-2 items-center mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-3/6 xl:w-2/5">
      <Image
        src={Image4}
        alt="photo-1"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL=""
        className="rounded transition-all duration-200 hover:scale-105 origin-bottom-left rotate-3"
      />
      <Image
        src={Image5}
        alt="photo-5"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL=""
        className="rounded transition-all duration-200 z-10 scale-110 hover:scale-105"
      />
      <Image
        src={Image3}
        alt="photo-3"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL=""
        className="rounded transition-all duration-200 hover:scale-105 origin-bottom-left -rotate-3"
      />
    </div>
  );
}
