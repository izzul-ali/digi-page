import { RiBankFill } from 'react-icons/ri';
import { FaToolbox } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';

export default function Mission() {
  return (
    <section className="mt-10 mb-20 md:mt-20 lg:my-32">
      <div className="flex items-center md:justify-center gap-x-3">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading w-3/5 md:w-2/5">
          We are on a mission to help your bussines grow faster than ever
        </h2>
        <p className="text-sm text-gray-400 w-2/5 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates reprehenderit laborum nobis
          exercitationem. Dolor sequi libero nulla
        </p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-3 grid-rows-2 sm:grid-rows-1 gap-y-5 items-center justify-items-center gap-3 mt-12 lg:mt-16 mx-auto md:w-4/5">
        <div className="col-span-2 sm:col-span-1 text-center h-full bg-gray-800 hover:bg-gray-800/50 hover:-translate-y-2 transition-all duration-200 px-2 py-4 rounded">
          <RiBankFill className="w-9 h-fit mx-auto mb-3 fill-cyan-500" />
          <h3 className="text-lg font-heading mb-1">100+ Company Trusted</h3>
          <p className="text-sm font-inter text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veniam voluptate quia odit?
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 text-center h-full  bg-gray-800 hover:bg-gray-800/50 hover:-translate-y-2 transition-all duration-200 px-2 py-4 rounded">
          <FaToolbox className="w-8 h-fit mx-auto fill-cyan-500 mb-3" />
          <h3 className="text-lg font-heading mb-1">200% Bussines Success</h3>
          <p className="text-sm font-inter text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veniam voluptate quia odit?
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1 col-start-2 w-full h-full text-center bg-gray-800 hover:bg-gray-800/50 hover:-translate-y-2 transition-all duration-200 px-2 py-4 rounded">
          <MdGroups2 className="w-10 h-fit mx-auto fill-cyan-500 mb-3" />
          <h3 className="text-lg font-heading mb-1">80% Client Increase</h3>
          <p className="text-sm font-inter text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veniam voluptate quia odit?
          </p>
        </div>
      </div>
    </section>
  );
}
