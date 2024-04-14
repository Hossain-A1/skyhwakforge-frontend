"use client";
import Link from "next/link";
import { GiDeliveryDrone } from "react-icons/gi";
import Button, { buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const pathName = usePathname();
  const [icon, setIcon] = useState(false);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { userAndToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const navContents = [
    { href: "/", label: "home" },
    { href: "/about-us", label: "about" },
    { href: "/drones-page", label: "drones" },
    { href: "/galleries", label: "galleries" },
    { href: "/offers", label: "offers" },
    { href: "/support", label: "support" },
  ];

  return (
    <header className='h-20 flex items-center fixed top-0 left-0 right-0 z-[999] bg-dark'>
      <div className='container flex justify-between items-center'>
        <h2 className='text-blue text-xl font-semibold'>SkyHawkForge</h2>
        <section
          className={`${
            !icon
              ? "max-lg:hidden"
              : "max-lg:flex max-lg:flex-col max-lg:fixed max-lg:bg-dark z-[99] max-lg:inset-0"
          }`}
        >
          <ul className='lg:flex lg:justify-between xl:gap-10 max-lg:flex-col gap-5 items-center justify-center text-center max-lg:space-y-10'>
            {navContents.map((item) => (
              <li key={item.label} className='uppercase text-sm'>
                <Link
                  href={item.href}
                  onClick={() => setIcon(false)}
                  className={
                    pathName === item.href
                      ? "text-light underline underline-offset-8"
                      : "text-light/40"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {userAndToken?.user ? (
              <li className='flex justify-end items-center gap-5'>
                <Link href='#'> {userAndToken.user.email}</Link>
                <Button onClick={() => dispatch(logout())} variant='secondary'>
                  Logout
                </Button>
              </li>
            ) : (
              <li>
                <Link
                  href='/sign-up'
                  className={cn(buttonVariants({ variant: "secondary" }))}
                >
                  Sign up
                </Link>
              </li>
            )}
          </ul>
        </section>
        <div className='flex items-center gap-5'>
          <div
            onClick={() => setIcon(!icon)}
            className='cursor-pointer lg:hidden'
          >
            {icon ? (
              <CgClose className='text-2xl' />
            ) : (
              <CgMenu className='text-2xl' />
            )}
          </div>
          <Link href='/cart' className='flex items-center'>
            <GiDeliveryDrone className='text-2xl text-blue' />
            <span>({cartItems?.length || 0})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
