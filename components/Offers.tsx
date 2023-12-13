"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";
import useFetch from "@/hooks/useFetch";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";

const Offers = () => {
  const { data: offers } = useFetch("/api/drones");

  return (
    <section className='container sp mt-10'>
      <div className=''>
        <Swiper
          loop={true}
          speed={700}
          autoplay={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className='mySwiper h-[20rem] w-full'
        >
          {offers?.length > 1 &&
            offers.map((item: droneType) => (
              <SwiperSlide key={item._id} className='h-full w-full relative'>
                <Image
                  src={item.images[0]}
                  alt={item.category}
                  priority
                  height={720}
                  width={1080}
                  className='h-full w-full object-cover'
                />

                <div className='absolute top-40'>
                  <h2 className='text-light'>{item.title}</h2>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <SectionTitle title='offers' headline='Today best deal for you' />
    </section>
  );
};

export default Offers;
