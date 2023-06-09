// @ts-nocheck
import Image from 'next/image';
import customers from '~/constan/customers';

export default function Customer() {
  return (
    <section className="my-20 lg:my-28 font-inter marquee">
      <marquee scrollamount={5} width={'100%'} direction={'left'} loop={'INFINITE'}>
        <div className="flex items-center gap-x-10 lg:gap-x-16">
          {customers.map((v) => (
            <Image key={v.alt} src={v.link} alt={v.alt} width={70} height={70} className="lg:w-24 lg:h-fit" />
          ))}
        </div>
      </marquee>
    </section>
  );
}
