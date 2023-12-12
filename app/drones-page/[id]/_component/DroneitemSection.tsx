"use client";
import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import Review from "@/components/shared/Review";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DroneDetailsPageProps {
  item: droneType;
}

const DroneitemSection: React.FC<DroneDetailsPageProps> = ({ item }) => {
  const [isChangeImage, setIsChangeImage] = useState(item.images[0]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const increaseCount = () => {
    // Use the functional form of setCount to access the previous value
    setCount(prevCount => prevCount + 1);
  };
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
              <h3 className='text-light/70'>Product ID: {item._id}</h3>
            </div>

            <div className='flex'>
              <h2>{item.category}</h2>
              <span>{item.createdAt}</span>
            </div>
            <p>
              Real Products with a one-year guarantee and an easy 15-day return
              option. Quick delivery in 2-4 days, and the price includes taxes.
            </p>
            <h2 className=' text-lg flex items-center j'>
              <span className='text-4xl text-green-700'>•</span> In stock
            </h2>

            <del className='text-sm font-medium'>
              {<CurrencyFormatter amount={((item.price / 2) * 5) / 2} />}
            </del>
            <span className='text-2xl font-bold'>
              {<CurrencyFormatter amount={item.price} />}
            </span>

            <div className='cart w-full h-full flex gap-5 items-center'>
              <div className='flex items-center gap-5 bg-light/70 border px-6 py-2 rounded-md'>
                <button className='text-2xl font-semibold text-dark' onClick={increaseCount}>-</button>
                <strong className='text-2xl font-semibold text-dark'>{count}</strong>
                <button className='text-2xl font-semibold text-dark' onClick={increaseCount}>+</button>
              </div>
              <div className='w-4/5'>
                <Link
                  href={""}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "full" }),
                    "text-center w-full"
                  )}
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className='border w-full border-light' />

      <div className='about-item grid lg:grid-cols-2 grid-cols-1 gap-10   '>
        <div className='space-y-5'>
          <h2 className='text-2xl font-semibold'>About the item:</h2>

          <span className='text-xl text-light/70'>{item.about}</span>
        </div>
        <div className='space-y-5'>
          <table className='w-full border-light border border-collapse '>
            <thead className='border-blue border-4'>
              <tr>
                <th className='text-4xl font-semibold p-1 text-center'>
                  Product specifications
                </th>
              </tr>
            </thead>
            <tbody className=''>
              <tr className=''>
                <td className="text-lg font-semibold">Package Dimensions L x W x H</td>
                <td>24 x 19.7 x 13.6 centimetres</td>
              </tr>
              <tr className=' '>
                <td className="text-lg font-semibold">Package Dimensions L x W x H</td>
                <td>14.7 x 9.4 x 6.4 centimetres</td>
              </tr>
              <tr className=' '>
                <td className="text-lg font-semibold">Brand</td>
                <td>DJI</td>
              </tr>
              <tr className=' '>
                <td className="text-lg font-semibold">Color</td>
                <td>Light Gray</td>
              </tr>

              <tr
                onClick={() => setSeeMore(!seeMore)}
                className='text-blue shadow-2xl font-semibold'
              >
                {!seeMore ? "See More.... " : "See Less"}
              </tr>

              {
                <aside className={seeMore ? "block" : "hidden"}>
                  <tr className=''>
                    <td className="text-lg font-semibold">Max Focal Length</td>
                    <td>30 Millimetres</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Included components</td>
                    <td>
                      DJI RC 2 x 1, DJI Mini 4 Pro/Mini 3 Series Two-Way
                      Charging Hub x 1, USB-C Cable x 1, DJI Mini 4 Pro
                      Intelligent Flight Battery x 3, DJI Mini Shoulder Bag x 1,
                      DJI Mini 4 Pro x 1, DJI Mini 4 Pro Gimbal Protector x 1,
                      Spare Propellers (Pair) x 3, Spare Screws x 18, Type-C to
                      Type-C PD Cable x 1, DJI Mini 4 Pro Propeller Holder x 1,
                      Screwdriver x 1
                    </td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Has image stabilisation</td>
                    <td>YES</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Style</td>
                    <td>DJI Mini 4 Pro Fly More Combo RC2</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Part number</td>
                    <td>CP.MA.00000735.02</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Effective still resolution</td>
                    <td>48 MP</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Package Weight</td>
                    <td>1.56 Kilograms</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Item Weight</td>
                    <td>0.82 Kilograms</td>
                  </tr>
                  <tr className=''>
                    <td className="text-lg font-semibold">Warranty description</td>
                    <td>DJI</td>
                  </tr>
                </aside>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DroneitemSection;
