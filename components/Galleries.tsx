import Image from "next/image";
import { data } from "../public/data/GalleriesData";
import Link from "next/link";
import SectionTitle from "./shared/SectionTitle";

const Galleries = () => {
  return (
    <section className='sp container mt-10 space-y-5'>
      <SectionTitle
        title='Our galleries'
        headline='After acquiring our drone, customers supply us with drone footage.'
      />
      <div className='grid lg:grid-cols-3 grid-cols-2 items-center gap-5 '>
        {data.map((gData) => (
          <div
            key={gData._id}
            className=' w-full h-full shadow-sm shadow-blue hover:scale-125 eq'
            data-aos="zoom-in"   data-aos-duration='700'
          >
            <Link
              href='/drones-page'
              className='gallery-image w-full h-full relative'
            >
              <Image
                src={gData.cover}
                alt='Our gallery images'
                height={1280}
                width={1920}
                priority
                className='h-full w-full object-cover '
              />

              <div className='absolute top-4 left-4'>
                <h2>{gData.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galleries;
