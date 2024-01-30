"use client";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className='bg-blue/30 w-full py-3 hover:bg-blue/40 eq flex items-center justify-center'>
        <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
      </div>
      <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-5 bg-blue text-light p-5'>
        <div className='flex flex-col items-center p-10'>
          <div>
            <span className='text-6xl  font-semibold'>#</span>
            <h2>
              SKYWHAKFORGE <br />
              Providing reliable drones since 2002
            </h2>
          </div>
        </div>

        <div className='flex max-lg:flex-col max-lg:justify-center justify-around gap-10 col-span-2'>
          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              Quick Links
            </h2>
            <li className=''>
              <Link href='/' className='l text-sm'>
                Home
              </Link>
            </li>

            <li className=''>
              <Link href='/about-us' className=' text-sm'>
                About
              </Link>
            </li>
            <li className=''>
              <Link href='/drones-page' className=' text-sm'>
                Drones
              </Link>
            </li>
            <li className=''>
              <Link href='/offers' className=' text-sm'>
                Offers
              </Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-3 items-center  '>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              company
            </h2>
            <li className=''>
              <Link href='/about' className=' text-sm'>
                About
              </Link>
            </li>
            <li className=''>
              <Link href='/about' className=' text-sm'>
                Galleries
              </Link>
            </li>
            <li className=''>
              <Link href='/support' className=' text-sm'>
                Support
              </Link>
            </li>
            <li className=''>
              <Link href='/login' className=' text-sm'>
                login
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-center gap-5'>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              {" "}
              LEGAL
            </h2>
            <Link href='#' className='text-sm'>
              Terms of use
            </Link>
            <Link href='#' className='text-sm'>
              Privacy policy
            </Link>
            <Link href='#' className='text-sm'>
              Cookie policy
            </Link>
          </div>

          <div className='social text-light flex flex-col items-center gap-5'>
            <h2 className='text-md text-light/60 font-semibold underline underline-offset-4 uppercase'>
              Social
            </h2>

            <div className='flex gap-5 justify-center text-light'>
              {" "}
              <span>
                <FaFacebookF className='text-4xl ' />
              </span>
              <span>
                <FaYoutube className='text-4xl ' />
              </span>
              <span>
                <FaTwitter className='text-4xl' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
