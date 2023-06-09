import { TCardService, cardServices } from '~/constan/price-card';
import { AiFillCheckCircle } from 'react-icons/ai';
import BtnSelectPrice from './BtnSelectPrice';

export default function Price() {
  return (
    <section className="mt-20">
      <div className="lg:w-4/5 mx-auto sm:flex items-center sm:items-start text-center">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold">Best package price especially for you</h2>
        <div className="mt-5 sm:mt-0 sm:w-4/5">
          <p className="text-sm sm:text-xs md:text-sm text-gray-400 font-inter">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, saepe. Hic ratione numquam iure!
          </p>
          <BtnSelectPrice />
        </div>
      </div>
      <div className="lg:w-[90%] xl:w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-y-4 md:gap-x-7 mt-7 sm:mt-16">
        {cardServices.map((v) => (
          <PriceCard key={v.type} service={v} />
        ))}
      </div>
    </section>
  );
}

function PriceCard({ service }: { service: TCardService }) {
  return (
    <div className="font-inter w-4/5 sm:w-3/5 md:1/2 bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-800 rounded-md p-3 py-5 hover:scale-105 transition-all duration-200">
      <section className="text-center space-y-2">
        <p className="text-gray-400 text-lg">{service.type}</p>
        <h3 className="dark:text-gray-200 text-2xl font-bold">{service.price}</h3>
        <p className="flex items-center justify-center text-xs text-gray-400 gap-x-1">
          Per month <span className="inline-block p-[2px] rounded-full bg-gray-500"></span> 0{service.totalService}{' '}
          Service
        </p>
      </section>
      <section className="mt-4 space-y-4">
        {service.services.map((v, i) => (
          <div key={v} className="flex items-center gap-x-2">
            <AiFillCheckCircle
              className={`w-4 h-fit ${i < service.totalService ? 'fill-green-500' : 'fill-gray-500'}`}
            />
            <p className={`text-sm`}>{v}</p>
          </div>
        ))}
      </section>
      <button className="mt-5 block w-full mx-auto px-5 py-2 text-sm rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-700/50 via-indigo-700/50 to-cyan-700/50 hover:scale-95 transition-all duration-200">
        Get started
      </button>
    </div>
  );
}
