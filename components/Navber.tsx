"use client";
import Link from "next/link";
import { GiDeliveryDrone } from "react-icons/gi";
import { buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Navber = () => {
  const pathName = usePathname();
  const [navModal, setNavModal] = useState<boolean>(true);
  const {cartItems} = useSelector((state: RootState) => state.cart);

  const navContents = [
    { href: "/", label: "home" },
    { href: "/about-us", label: "about" },
    { href: "/drones-page", label: "drones" },
    { href: "/galleries", label: "galleries" },
    { href: "/offers", label: "offers" },
    { href: "/support", label: "support" },
  ];

  return (
    <header className='h-20 flex items-center fixed top-0 left-0 right-0 z-[999] bg-dark '>
      <nav className='container flex justify-between items-center  '>
        <div>
          <h2 className='text-blue  font-semibold'>SkyHawkForge</h2>
        </div>

        <div className=''>
          <ul className='flex items-center gap-10 text-light'>
            {navContents.map((item) => (
              <li key={item.label} className='uppercase text-sm'>
                <Link
                  onClick={() => setNavModal(false)}
                  href={item.href}
                  className={
                    pathName === item.href
                      ? "text-light underline  underline-offset-8"
                      : "text-light/40"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-5'>
        

          <div className='hidden'>
            {/* mobile responsive */}
            <div className='mobile-navber-btn  '>
              <CgMenu
                name='menu-outline'
                className='mobile-navber-icon text-4xl'
                onClick={() => setNavModal(true)}
              />
              <CgClose
                name='close-outline'
                className='mobile-navber-icon close-outline'
                onClick={() => setNavModal(false)}
              />
            </div>
          </div>

          <div className='max-lg:hidden'>
            <Link
              href='/sign-up'
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Sign up
            </Link>
          </div>

          <div className='flex items-center'>
         <Link href='/cart' >
            <GiDeliveryDrone className='text-2xl text-blue' />
          </Link>
            <span>({cartItems?.length})</span>
         </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
