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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";

const Offers = () => {
  const { data: offers, isLoading, error } = useFetch("/api/drones");

  return (
    <section className='container sp mt-10'>
      <SectionTitle title='offers' headline='Today best deal for you' />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      <div className='space-y-20'>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          speed={700}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  '>
        {offers &&
          offers.map((droneObj: droneType) => (
            <div
              key={droneObj._id}
              className=' flex flex-wrap items-center justify-center shadow-sm shadow-light rounded-xl hover:scale-105 eq overflow-hidden'
            >
              <div className=' h-[28rem] w-[24rem]  flex flex-col items-center gap-5 '>
                <Link
                  href={`/drones-page/${droneObj._id}`}
                  className='h-[18rem] w-full block overflow-hidden'
                >
                  <Image
                    height={1280}
                    width={720}
                    src={droneObj.images[0]}
                    alt={droneObj.title}
                    priority
                    className='h-full w-full object-cover '
                  />
                </Link>
                <div className='h-[8rem] w-full px-5 space-y-3'>
                  <h2 className='text-light'>{droneObj.title}</h2>
                  <div className='flex gap-2 items-center border-b border-spacing-y-10'>
                    <span className='text-light'>{droneObj.rating}</span>
                    <Review rate={droneObj} />
                    <span className='text-light'>(343)</span>
                  </div>

                  <div className='flex justify-between items-center'>
                    <strong className='text-light text-xl font-bold'>
                      <CurrencyFormatter amount={droneObj.price} />
                      <del className='text-sm font-medium relative -top-5'>
                        <CurrencyFormatter
                          amount={((droneObj.price / 2) * 5) / 2}
                        />
                      </del>
                    </strong>

                    <Link
                      href={`/drones-page/${droneObj._id}`}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "font-semibold"
                      )}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default Offers;
