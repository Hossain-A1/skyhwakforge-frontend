"use client";
import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import Review from "@/components/shared/Review";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/libs/utils";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DroneDetailsPageProps {
  item: droneType;
}

const DroneitemSection: React.FC<DroneDetailsPageProps> = ({ item }) => {
  const [isChangeImage, setIsChangeImage] = useState(item.images[0]);
  return (
    <section className='space-y-10'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='left flex flex-col items-center gap-5'>
          <div className='details-image h-[26rem] w-[28rem]  shadow-sm shadow-blue group'>
            <Image
              src={isChangeImage}
              alt={item.title}
              height={720}
              width={1080}
              priority
              className='h-full w-full object-cover group-hover:scale-110 eq'
            />
          </div>

          <div className='flex justify-center gap-5'>
            {item.images.map((image, i) => (
              <div key={i} className=''>
                <div className='details-image h-[6rem] w-[6rem]  border-2  hover:border-dotted eq'>
                  <Image
                    src={image}
                    alt={item.title}
                    height={720}
                    width={1080}
                    priority
                    className='h-full w-full object-cover cursor-pointer'
                    onClick={() => setIsChangeImage(image)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='right '>
          <div className='flex flex-col items-start gap-5'>
            <h2 className='text-3xl font-semibold'>{item.title}</h2>
            <div className='flex gap-2 items-center'>
              <span className='text-light'>{item.rating}</span>
              <Review rate={item} />
              <span className='text-light'>(343)</span>
            </div>

            <p>
              Real Products with a one-year guarantee and an easy 15-day return
              option. Quick delivery in 2-4 days, and the price includes taxes.
            </p>
            <h2 className=' text-lg flex items-center j'>
              <span className='text-4xl text-green-700'>•</span> In stock
            </h2>

            <div className='cart w-full h-full flex justify-between  items-center'>
              <div>
                <span>{<CurrencyFormatter amount={item.price} />}</span>
              </div>
              <div>
                <Link
                  href={""}
                  className={cn(
                    buttonVariants({ variant: "secondary" ,size:"full"}),
                    "text-center"
                  )}
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-item grid lg:grid-cols-2 grid-cols-1 gap-5 border-t '>
        <div>
          <span>{item.about.substring(0, 700)}...</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ullam
            ea eveniet nihil, unde ducimus provident sapiente excepturi
            veritatis, maxime nobis vel fugit nesciunt deleniti omnis atque eum
            est. Ratione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DroneitemSection;
