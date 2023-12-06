"use client";
import useFetch from "@/hooks/useFetch";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import React from "react";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import Review from "./shared/Review";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { buttonVariants } from "./ui/Button";

const Drones = () => {
  const { data: drones, isLoading, error } = useFetch("/api/drones");
  if (drones) {
    console.log(drones);
  }
  return (
    <section className='container  mt-20 sp  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  '>
      {drones &&
        drones.map((droneObj: droneType) => (
          <div
            key={droneObj._id}
            className=' flex flex-wrap items-center justify-center shadow-sm shadow-light rounded-xl '
          >
            <Link
              href={`/drones-page/${droneObj._id}`}
              className=' h-[28rem] w-[24rem]  flex flex-col items-center gap-5 '
            >
              <div className='h-[18rem] w-full '>
                <Image
                  height={720}
                  width={1080}
                  src={droneObj.images[0]}
                  alt={droneObj.title}
                  priority
                  className='h-full w-full object-cover '
                />
              </div>
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
            </Link>
          </div>
        ))}
    </section>
  );
};

export default Drones;
