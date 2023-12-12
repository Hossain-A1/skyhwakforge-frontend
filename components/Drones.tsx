"use client";
import useFetch from "@/hooks/useFetch";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import React from "react";
import { CurrencyFormatter } from "./shared/CurrencyFormatter";
import Review from "./shared/Review";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import SectionTitle from "./shared/SectionTitle";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

interface DronesPops {
  native?: boolean;
}
const Drones: React.FC<DronesPops> = ({ native }) => {
  const { data: drones, isLoading, error } = useFetch("/api/drones");

  return (
    <section className='container sp mt-20 space-y-5'>
      <SectionTitle
        title='Drones'
        headline='Explore the Skies with Our Cutting-Edge Drone Collection - Elevate Your Aerial Adventures!'
      />

      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  '>
        {drones &&
          drones.map((droneObj: droneType) => (
            <div
              key={droneObj._id}
              className=' flex flex-wrap items-center justify-center shadow-sm shadow-light rounded-xl hover:scale-105 eq'
            >
              <div className=' h-[28rem] w-[24rem]  flex flex-col items-center gap-5 '>
                <Link
                  href={`/drones-page/${droneObj._id}`}
                  className='h-[18rem] w-full '
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
    </section>
  );
};

export default Drones;
