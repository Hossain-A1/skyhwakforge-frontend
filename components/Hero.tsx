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

        <div className='absolute z-[102] h-full w-full'>
          <div className=' grid grid-cols-2 items-center h-full w-full '>
            <div className='  flex justify-center items-center'>
              <div className='drone-image lg:h-[28rem] lg:w-[28rem] max-2xl::h-[38rem] max-2xl:w-[38rem] flex flex-col items-center  '>
                <Image
                  src='/images/hero-drone.png'
                  alt='hero-drone'
                  height={640}
                  width={1280}
                  priority
                  className='h-full w-full object-cover '
                />
              </div>
            </div>

            <div className='  hero-para space-y-10'>
              <div className=''>
                <h1 className='leading-[1.1]'>
                  Explore the Skies with Our Drones
                </h1>
              </div>
              <p>
                "Discover a digital sanctuary at SkyHawkForge, where dreams take
                flight and ideas soar beyond the ordinary. Nourish your mind
                with a tapestry of curated wonders, from visionary artworks to
                narratives that dance on the edge of reality."
              </p>
              <div className='flex items-center gap-5 '>
                <Link
                  href=''
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "text-sm "
                  )}
                >
                  Explore ⊳⊳⊳
                </Link>
                <Link
                  href=''
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "text-sm eq"
                  )}
                >
                  Buy Now $$
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
