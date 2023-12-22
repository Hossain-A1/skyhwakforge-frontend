"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { droneType } from "@/types/drone.type";
import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import { buttonVariants } from "@/components/ui/Button";
import Review from "@/components/shared/Review";

interface DroneItemProps {
  droneObj: droneType;
}

const DroneItem: React.FC<DroneItemProps> = ({ droneObj }) => {
  return (
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
              <CurrencyFormatter amount={((droneObj.price / 2) * 5) / 2} />
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
  );
};

export default DroneItem;
