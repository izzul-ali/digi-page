import Image from 'next/image';
import Image1 from '../assets/photo-1.jpg';
import experience from '~/constan/experience';

export default function Experience() {
  return (
    <section className="lg:w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-3 grid-rows-2 items-center md:items-start gap-x-5">
      <Image
        src={Image1}
        alt="image-1"
        placeholder="blur"
        blurDataURL=""
        className="rounded mx-auto lg:mr-auto md:row-span-2 hover:scale-105 transition-all duration-200 h-fit w-4/5 sm:w-3/5 lg:w-3/5"
      />
      <div className="space-y-2 lg:col-span-2 lg:w-4/5">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold">
          Become trusted of the world best digital marketing
        </h2>
        <p className="text-sm text-gray-400 font-inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere nemo temporibus quam officia error?
        </p>
      </div>
      <div className="col-span-2 md:col-span-1 lg:col-span-2 font-inter">
        <div className="w-fit mx-auto md:mx-0 grid grid-cols-2 gap-5">
          {experience.map((v, i) => (
            <div key={i} className={`${i % 2 === 0 && 'border-r-2 border-gray-500 pr-2'}`}>
              <h3 className="font-semibold text-lg">{v.amount}+</h3>
              <p className="text-gray-400 text-sm font-light">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
