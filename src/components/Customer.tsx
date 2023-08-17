// @ts-nocheck
import Image from 'next/image';
import customers from '~/constan/customers';
import Marquee from 'react-fast-marquee';

export default function Customer() {
  return (
    <section className="my-20 lg:my-28 font-inter marquee">
      <Marquee pauseOnHover speed={40}>
        <div className="flex items-center gap-x-10 lg:gap-x-16">
          {customers.map((v) => (
            <Image
              key={v.alt}
              src={v.link}
              alt={v.alt}
              width={70}
              height={70}
              className="w-[70px] h-[70px] lg:w-24 lg:h-fit"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
