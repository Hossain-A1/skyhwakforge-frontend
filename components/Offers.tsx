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
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import Review from "./shared/Review";

const Offers = () => {
  const { data: offers, isLoading, error } = useFetch("/api/drones");

  return (
    <section className='container sp mt-10'>
      <SectionTitle title='offers' headline='Today best deal for you' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      <div className=''>
        <Swiper
          loop={true}
          speed={700}
          grabCursor={true}
          autoplay={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className='mySwiper h-[20rem] w-full'
        >
          {offers?.length > 1 &&
            offers.map((item: droneType) => (
              <SwiperSlide key={item._id} className='h-full w-full relative'>
                <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-dark/30 z-[101]'></div>

                <Image
                  src={item.images[0]}
                  alt={item.category}
                  priority
                  height={720}
                  width={1080}
                  className='h-full w-full object-cover z-[100]'
                />

                <div className='absolute top-10 left-40 z-[102] '>
                <div className="flex justify-between gap-5 items-center">
                <div className='flex flex-col gap-5 '>
                    <h1 className='text-light '>{item.title}</h1>
                    <del className='text-light text-2xl '>
                      <CurrencyFormatter amount={((item.price / 2) * 5) / 2} />
                    </del>

                    <strong className='text-4xl text-red-700 font-bold'>
                      {" "}
                      <CurrencyFormatter amount={(item.price )}/>
                    </strong>
                  </div>

                  <div className="space-y-5">
                    <span className="text-light/70">{item.createdAt}</span>
                    <div className='flex gap-2 items-center text-2xl '>
                      <span className='text-light'>{item.rating}</span>
                      <Review rate={item} />
                      <span className='text-light'>(343)</span>
                    </div>
                    <span className="text-light/70 text-2xl">In stock-- {item.stock}</span>
                  </div>
                </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Offers;
