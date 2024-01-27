"use client";

import Image from "next/image";
import Review from "./shared/Review";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import SectionTitle from "./shared/SectionTitle";

const CustomerReviews = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [item] = cartItems;
  return (
    <main className='container sp mt-10 space-y-5'>
      <SectionTitle
        title='Reviews'
        headline='Real Experiences Shared by Our Customers'
      />

      <section >
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 items-center'>
      <div className='w-full border-2 space-y-3 p-5  border-blue '>
          <div className='flex gap-3 w-full'>
            <div className=' rounded-full'>
              <div className='  w-10 h-10'>
                <Image
                  src='https://randomuser.me/api/portraits/men/79.jpg'
                  alt='hero-drone'
                  height={280}
                  width={280}
                  priority
                  className='h-full w-full rounded-full object-cover  '
                />
              </div>
            </div>

            <div className='w-full '>
              <h2 className='flex items-center gap-2'>
                pekkka{" "}
                <b>
                  <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                </b>
              </h2>
              <p className='text-xs'>a month ago</p>
            </div>
          </div>
          <div className='w-full'>
            <Review rate={item} />
            <strong className='text-justify text-sm'>
              "Absolutely amazed by the performance and stability of my
              SkyhawkForge drone. Aerial views are breathtaking!"
            </strong>
          </div>
        </div>
        <div className='w-full  border-2 space-y-3 p-5  border-blue'>
          <div className='flex gap-3 w-full'>
            <div className=' rounded-full'>
              <div className='  w-10 h-10'>
                <Image
                  src='https://randomuser.me/api/portraits/women/85.jpg'
                  alt='hero-drone'
                  height={280}
                  width={280}
                  priority
                  className='h-full w-full rounded-full object-cover  '
                />
              </div>
            </div>

            <div className='w-full '>
              <h2 className='flex items-center gap-2'>
                Sara{" "}
                <b>
                  <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                </b>
              </h2>
              <p className='text-xs'>a week ago</p>
            </div>
          </div>
          <div className='w-full'>
            <Review rate={item} />
            <strong className='text-justify text-sm'>
              "Sleek design, easy to fly, and stunning camera quality.
              SkyhawkForge drones are top-notch!"
            </strong>
          </div>
        </div>
        <div className='w-full  border-2 space-y-3 p-5  border-blue'>
          <div className='flex gap-3 w-full'>
            <div className=' rounded-full'>
              <div className='  w-10 h-10'>
                <Image
                  src='https://randomuser.me/api/portraits/women/64.jpg'
                  alt='hero-drone'
                  height={280}
                  width={280}
                  priority
                  className='h-full w-full rounded-full object-cover  '
                />
              </div>
            </div>

            <div className='w-full '>
              <h2 className='flex items-center gap-2'>
                Mira{" "}
                <b>
                  <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                </b>
              </h2>
              <p className='text-xs'>a month ago</p>
            </div>
          </div>
          <div className='w-full'>
            <Review rate={item} />
            <strong className='text-justify text-sm'>
              "Impressed with the durable build and smooth controls.
              SkyhawkForge sets the standard for drone excellence."
            </strong>
          </div>
        </div>

        <button
          onClick={() => setSeeMore(!seeMore)}
          className='block text-center'
        >
          {!seeMore ? "See More.... " : "See Less"}
        </button>
      </div>

        {seeMore && (
          <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5 items-center'>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/women/47.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    Asira jd{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "Impressed with the durable build and smooth controls.
                  SkyhawkForge sets the standard for drone excellence."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/lego/4.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    user4765{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a day ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "Couldn't be happier with my new SkyhawkForge drone. The
                  features are mind-blowing, and it's so much fun to fly!"
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/men/14.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    Smith{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a week ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "SkyhawkForge has won me over. The drone is sleek, powerful,
                  and the camera quality is exceptional."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/men/54.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    Rahat A.{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "The build quality of my SkyhawkForge drone is impressive.
                  Solid purchase, and the aerial views are breathtaking."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/men/37.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    Mahmod hasan{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "Just took my SkyhawkForge for its maiden flight. Smooth
                  controls, stable hover, and the camera exceeded my
                  expectations."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/lego/1.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    User094/{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a day ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "SkyhawkForge drones are a game-changer. After the first
                  flight, I'm convinced I made the right choice."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/women/43.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    Jenica{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "SkyhawkForge's attention to detail is evident. The drone
                  feels premium, and the flight experience is nothing short of
                  amazing."
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/men/36.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    rihan
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "The foldable design of the SkyhawkForge drone makes it easy
                  to take on my travels. Compact and convenient!"
                </strong>
              </div>
            </div>
            <div className='w-full  border-2 space-y-3 p-5  border-blue'>
              <div className='flex gap-3 w-full'>
                <div className=' rounded-full'>
                  <div className='  w-10 h-10'>
                    <Image
                      src='https://randomuser.me/api/portraits/men/69.jpg'
                      alt='hero-drone'
                      height={280}
                      width={280}
                      priority
                      className='h-full w-full rounded-full object-cover  '
                    />
                  </div>
                </div>

                <div className='w-full '>
                  <h2 className='flex items-center gap-2'>
                    kajhsdh{" "}
                    <b>
                      <BsCheckCircleFill className='text-green-700 overflow-hidden rounded-full text-xs' />
                    </b>
                  </h2>
                  <p className='text-xs'>a month ago</p>
                </div>
              </div>
              <div className='w-full'>
                <Review rate={item} />
                <strong className='text-justify text-sm'>
                  "SkyhawkForge drones redefine what's possible. The intelligent
                  flight modes add a whole new dimension to the experience."
                </strong>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CustomerReviews;
