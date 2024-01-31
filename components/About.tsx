"use client";
import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";
import useFetch from "@/hooks/useFetch";
import { trainerType } from "@/types/trainerType";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import Loading from "./ui/Loading";
import { useState } from "react";

const About = () => {
  const { data: trainers, error, isLoading } = useFetch("/api/trainers");
  const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <section className='container sp   mt-20'>
      <div className='flex flex-col gap-10'>
        <div className='top-side'>
          <SectionTitle
            title='Why choose us?'
            headline='Our Team is Composed of Trained and Certified Drone Pilots'
            desc='SkyHawkForge: Pioneering the Horizon. At SkyHawkForge, we are more
            than just creators; we are architects of possibility. Our about page
            unveils the essence of our journey—where technological ingenuity
            meets boundless ambition. Explore the roots of our passion, the
            expertise that propels us forward, and the commitment to shaping the
            future of aerial exploration. Join us in the story of SkyHawkForge,
            where every innovation takes flight and every endeavor is a
            testament to the limitless potential of the skies we navigate.'
          />
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1  gap-10'>
          <div className='left-side flex flex-col items-center gap-5 w-full'>
            <h2 className='font-semibold text-2xl '>Mission and Value:</h2>
            <p>
              SkyHawkForge: Elevating possibilities in the skies. Our mission is
              to pioneer drone technology, opening new horizons for efficiency
              and innovation across industries.{" "}
            </p>
            <p>
              Integrity, Collaboration, Innovation, Sustainability—these values
              drive SkyHawkForge to redefine drone capabilities responsibly and
              creatively.
            </p>

            <div className='flex  max-md:flex-col  items-center mt-5   gap-5'>
              <div className=' p-5  shadow-sm shadow-blue flex items-center justify-center h-full w-full'>
                <span className='lg:text-2xl max-lg:text-sm text-light/70 font-bold uppercase text-center'>
                  22K+ sold
                </span>
              </div>
              <div className='p-5 shadow-sm shadow-blue flex items-center justify-center h-full w-full'>
                <span className='lg:text-2xl max-lg:text-sm text-light/70 font-bold uppercase text-center'>
                  4.7K stocks
                </span>
              </div>
            </div>
          </div>
          <div className=' right-side flex max-lg:flex-col items-center justify-between '>
            <div className='about-drone-image  '>
              <Image
                src='/images/about-drone.png'
                alt='hero-drone'
                height={640}
                width={1280}
                priority
                className='h-full w-full object-cover '
              />
            </div>

            <div className='bg-blue/20 lg:w-[20rem] lg:h-[20rem] max-lg:w-[18rem] max-lg:h-[18rem] rounded-r-full rounded-t-full flex flex-col gap-5 justify-center items-center'>
              <h3 className='text-sm text-light/40 capitalize underline underline-offset-2'>
                camera features
              </h3>
              <ol className='list-disc capitalize text-xl text-light/70 font-semibold'>
                <li>2k Resuloation</li>
                <li>Live streaming </li>
                <li>Wide-Angle range </li>
                <li>Stabilization Resolution</li>
                <li>RAW Format</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* trainers gose here */}

      <div className='trainer sp '>
        <SectionTitle title='Trainers' headline='Our Expart Trainers' />
        {isLoading && <Loading />}
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1'>
          {!seeMore
            ? trainers &&
              trainers.slice(0, 3).map((trainer: trainerType) => (
                <div
                key={trainer._id}
                  className='p-5 border flex flex-col items-center rounded-xl gap-2'
                  data-aos='zoom-in'
                  data-aos-duration='700'
                >
                  <div className='h-16 w-16 rounded-full overflow-hidden'>
                    <Image
                      src={trainer.picUrl}
                      alt='trainer image'
                      height='200'
                      width='200'
                      priority
                      className='h-full w-full object-cover'
                    />
                  </div>

                  <div className='relative '>
                    <span className='lg:rotate-45 rotate-90  block absolute lg:left-2 max-sm:left-8 max-sm:top-5   lg:-top-10'>
                      {trainer._id}
                    </span>
                  </div>
                  <h2 className='text-lg uppercase text-center'>
                    {trainer.name}
                  </h2>
                  <h3 className='text-gray-500'>{trainer.designation}</h3>
                  <h5 className='text-sm font-extralight italic'>
                    DateOfBirth: {trainer.dateOfBirth}
                  </h5>
                  <Link
                    href='/'
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    Read me
                  </Link>
                </div>
              ))
            : trainers.map((trainer: trainerType) => (
                <div
                  className='p-5 border flex flex-col items-center rounded-xl gap-2'
                  data-aos='zoom-in'
                  data-aos-duration='700'
                >
                  <div className='h-16 w-16 rounded-full overflow-hidden'>
                    <Image
                      src={trainer.picUrl}
                      alt='trainer image'
                      height='200'
                      width='200'
                      priority
                      className='h-full w-full object-cover'
                    />
                  </div>

                  <div className='relative '>
                    <span className='lg:rotate-45 rotate-90 text-right block absolute lg:left-2 sm:left-5  md:left-14  lg:-top-12'>
                      {trainer._id}
                    </span>
                  </div>
                  <h2 className='text-lg uppercase text-center'>
                    {trainer.name}
                  </h2>
                  <h3 className='text-gray-500'>{trainer.designation}</h3>
                  <h5 className='text-sm font-extralight italic'>
                    DateOfBirth: {trainer.dateOfBirth}
                  </h5>
                  <Link
                    href='/'
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    Reed me
                  </Link>
                </div>
              ))}

          <button
            onClick={() => setSeeMore(!seeMore)}
            className='block text-blue text-center'
          >
            {!seeMore ? "See More.... " : "See Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
