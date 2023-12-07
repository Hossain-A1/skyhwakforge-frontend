import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";

const About = () => {
  return (
    <section className='container  mt-40'>
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

        <div className='grid grid-cols-2  gap-10'>
          <div className='left-side flex flex-col items-center gap-5'>
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

            <div className='flex items-center gap-5'>
              <div className='h-[8rem] w-[8rem] shadow-sm shadow-blue flex items-center justify-center'>
                <span className='text-2xl text-light/70 font-bold uppercase text-center'>
                  22K+ sold
                </span>
              </div>
              <div className='h-[8rem] w-[8rem] shadow-sm shadow-blue flex items-center justify-center'>
                <span className='text-2xl text-light/70 font-bold uppercase text-center'>
                  4.7K stocks
                </span>
              </div>
              <div className='h-[8rem] w-[8rem] shadow-sm shadow-blue flex items-center justify-center'>
                <span>8K+ sold</span>
              </div>
              <div className='h-[8rem] w-[8rem] shadow-sm shadow-blue flex items-center justify-center'>
                <span>8K+ sold</span>
              </div>
            </div>
          </div>
          <div className=' right-side flex justify-between'>
            <div className='about-drone-image lg:h-[20rem] lg:w-[20rem] max-2xl::h-[30rem] max-2xl:w-[30rem] flex flex-col items-center  '>
              <Image
                src='/images/about-drone.png'
                alt='hero-drone'
                height={640}
                width={1280}
                priority
                className='h-full w-full object-cover '
              />
            </div>

            <div className='bg-blue/20 w-[20rem] h-[20rem] rounded-r-full rounded-t-full flex flex-col gap-5 justify-center items-center'>
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
    </section>
  );
};

export default About;
