"use client";
import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import Review from "@/components/shared/Review";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  addToCart,
  decreaseCart,
  increaseCart,
} from "@/redux/features/carts/CartSlice";
import { RootState } from "@/redux/store";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface DroneDetailsItemProps {
  item: droneType;
}

const DroneDetailsItem: React.FC<DroneDetailsItemProps> = ({ item }) => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const [isChangeImage, setIsChangeImage] = useState(item.images[0]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <section className='space-y-10'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='left flex flex-col items-center gap-5'>
          <div className='details-image lg:h-[26rem] lg:w-[28rem] h-full w-full  shadow-sm shadow-blue group'>
            <Image
              src={isChangeImage}
              alt={item.title}
              height={720}
              width={1080}
              priority
              className='h-full w-full object-cover max-md:object-contain group-hover:scale-110 eq'
            />
          </div>

          <div className='flex  justify-center gap-5'>
            {item.images.map((image, i) => (
              <div key={i} className=''>
                <div className='details-image lg:h-[6rem] lg:w-[6rem] h-12 w-12  border-2  hover:border-dotted eq'>
                  <Image
                    src={image}
                    alt={item.title}
                    height={720}
                    width={1080}
                    priority
                    className='h-full w-full object-cover  cursor-pointer'
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
            <div className='flex max-md:flex-col gap-2 items-center'>
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
              <CurrencyFormatter amount={((item.price / 2) * 5) / 2} />
            </del>
            <span className='text-2xl font-bold'>
              {<CurrencyFormatter amount={item.price} />}
            </span>

            <div className='cart w-full h-full flex gap-5 items-center'>
              <div className='flex items-center gap-5 bg-light/70 border px-6 py-2 rounded-md'>
                <button
                  className='text-2xl font-semibold text-dark'
                  onClick={() => dispatch(decreaseCart(item._id))}
                >
                  -
                </button>
                <strong className='text-2xl font-semibold text-dark'>
                  {item.count}
                </strong>
                <button
                  className='text-2xl font-semibold text-dark'
                  onClick={() => dispatch(increaseCart(item._id))}
                >
                  +
                </button>
              </div>
              <div className='w-4/5'>
                <Link
                  onClick={() => dispatch(addToCart({ ...item, count: 1 }))}
                  href={"/cart"}
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

          <div className=''>
            <div className=''>
              <h2 className='text-xl text-light/70'>
                {item.about.substring(0, 500)}
              </h2>
              <strong
                className='text-xl  text-blue '
                onClick={() => setSeeMore(!seeMore)}
              >
                {" "}
                {!seeMore && "Read More...."}
              </strong>
            </div>
            {seeMore && (
              <h2 className='text-xl text-light/70'>
                {item.about.substring(300, 2000)}
              </h2>
            )}
          </div>
        </div>
        <div className='space-y-5'>
          <div className='w-full space-y-5 '>
            <h2 className='text-4xl font-semibold p-1 text-center flex max-md:flex-col items-center gap-5'>
              <span className='text-4xl  font-semibold text-blue border rounded-full '>
                ⏔
              </span>{" "}
              Product specifications
            </h2>
            <div className=''>
              <div className='item-model'>
                <h3 className='text-lg font-semibold'>
                  Package Dimensions L x W x H
                </h3>
                <strong>24 x 19.7 x 13.6 centimetres</strong>
              </div>
              <div className='item-model '>
                <h3 className='text-lg font-semibold'>
                  Package Dimensions L x W x H
                </h3>
                <strong>14.7 x 9.4 x 6.4 centimetres</strong>
              </div>
              <div className=' item-model'>
                <h3 className='text-lg font-semibold'>Brand</h3>
                <strong>DJI</strong>
              </div>
              <div className=' item-model'>
                <h3 className='text-lg font-semibold'>Color</h3>
                <strong>Light Gray</strong>
              </div>

              <div
                onClick={() => setSeeMore(!seeMore)}
                className='text-blue shadow-2xl font-semibold cursor-pointer '
              >
                {!seeMore ? "See More.... " : "See Less"}
              </div>

              {
                <div className={seeMore ? "block" : "hidden"}>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>Max Focal Length</h3>
                    <strong>30 Millimetres</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>
                      Included components
                    </h3>
                    <strong>
                      DJI RC 2 x 1, DJI Mini 4 Pro/Mini 3 Series Two-Way
                      Charging Hub x 1, USB-C Cable x 1, DJI Mini 4 Pro
                      Intelligent Flight Battery x 3, DJI Mini Shoulder Bag x 1,
                      DJI Mini 4 Pro x 1, DJI Mini 4 Pro Gimbal Protector x 1,
                      Spare Propellers (Pair) x 3, Spare Screws x 18, Type-C to
                      Type-C PD Cable x 1, DJI Mini 4 Pro Propeller Holder x 1,
                      Screwdriver x 1
                    </strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>
                      Has image stabilisation
                    </h3>
                    <strong>YES</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>Style</h3>
                    <strong>DJI Mini 4 Pro Fly More Combo RC2</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>Part number</h3>
                    <strong>CP.MA.00000735.02</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>
                      Effective still resolution
                    </h3>
                    <strong>48 MP</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>Package Weight</h3>
                    <strong>1.56 Kilograms</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>Item Weight</h3>
                    <strong>0.82 Kilograms</strong>
                  </div>
                  <div className='item-model'>
                    <h3 className='text-lg font-semibold'>
                      Warranty description
                    </h3>
                    <strong>DJI</strong>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneDetailsItem;
