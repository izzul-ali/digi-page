import Image from 'next/image';
import Image2 from '../assets/photo-2.jpg';

const recentBlogPost = ['Market Research', 'Data Collection', 'Audience Target'];

export default function Blog() {
  return (
    <section className="my-24 lg:mt-32 lg:mb-16 flex gap-x-3 md:gap-x-7 md:w-4/5 md:mx-auto">
      <div className="md:w-3/5">
        <h2 className="text-2xl lg:text-3xl font-bold font-heading">Latest from out blog for you visit</h2>
        <p className="text-sm text-gray-400 mt-2 mb-3 font-inter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, excepturi?
        </p>
        <div className="space-y-3">
          {recentBlogPost.map((v, i) => (
            <div key={v} className="flex items-start gap-x-2 text-base font-inter">
              <h4>0{i + 1}</h4>
              <div>
                <h4>{v}</h4>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={Image2}
        alt="img-2"
        width={170}
        height={200}
        placeholder="blur"
        blurDataURL=""
        className="rounded-md object-cover md:w-1/3 md:h-fit lg:w-1/4 xl:w-1/5"
      />
    </section>
  );
}
