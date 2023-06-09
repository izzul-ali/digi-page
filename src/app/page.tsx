import Customer from '~/components/Customer';
import Hero from '~/components/Hero';
import Experience from '~/components/Experience';
import Mission from '~/components/Mission';
import Price from '~/components/price/Price';
import Blog from '~/components/Blog';

export default function Home() {
  return (
    <div className="px-3 pb-5 md:px-7">
      <Hero />
      <Customer />
      <Experience />
      <Mission />
      <Price />
      <Blog />
    </div>
  );
}
