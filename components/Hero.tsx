import Image from "next/image";
import Overlay from "./Overlay";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";

const Hero = () => {
  return (
    <main className='h-[calc(100vh-5rem)] container mt-[5rem]'>
      <section className='w-full h-full relative'>
        {/* hero bg image */}
        <div
          className='absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-no-repeat bg-center z-[100]'
          style={{
            backgroundImage: `url('/images/hero-full.jpg')`,
          }}
        ></div>

        {/* overlay */}
        <Overlay />

        {/* contens */}

        <div className='absolute  top-36 max-md:top-1/2   z-[103]   rotate-12 max-md:rotate-0'>
          <div className='hero-para flex flex-col text-center gap-5 items-center   '>
            <div data-aos='fade-up' data-aos-duration='1000'>
              <h1 className='leading-[1.1]'>
                Explore the Skies with Our Drones
              </h1>
            </div>
            <p className='max-md:text-sm'>
              "Discover a digital sanctuary at SkyHawkForge, where dreams take
              flight and ideas soar beyond the ordinary. Nourish your mind with
              a tapestry of curated wonders, from visionary artworks to
              narratives that dance on the edge of reality."
            </p>
            <div
              className='flex items-center gap-5 '
              data-aos='fade-up'
              data-aos-duration='3000'
            >
              <Link
                href='/drones-page'
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "text-sm max-md:text-xs "
                )}
              >
                Explore ⊳⊳⊳
              </Link>
              <Link
                href='/offers'
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-sm max-md:text-xs eq"
                )}
              >
                Buy Now $$
              </Link>
            </div>
          </div>
        </div>

        <div className='absolute overflow-hidden z-[102] lg:left-1/2 lg:-translate-x-1/2 top-20 max-md:-top-32 h-full w-full'>
          <div
            className='drone-image w-1/2 max-md:w-full h-full flex flex-col justify-center items-center '
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <Image
              src='/images/hero-drone.png'
              alt='hero-drone'
              height={1280}
              width={1920}
              priority
              className='h-full w-full object-cover max-md:object-contain '
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
