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
const Navber = () => {
  const pathName = usePathname();
  const [icon, setIcon] = useState<boolean>(false);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { userAndToken } = useSelector((state: RootState) => state.auth);
  const loginUser = localStorage.getItem('user');
  const userAdd = loginUser ? JSON.parse(loginUser) : null;

  const filteredCartItems = cartItems.filter(item => userAndToken?.user && userAdd && userAndToken.user.email === userAdd.email);
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
    <header className='h-20 flex items-center fixed top-0 left-0 right-0 z-[999] bg-dark '>
      <div className='container flex justify-between items-center  '>
        <div>
          <h2 className='text-blue text-xl  font-semibold'>SkyHawkForge</h2>
        </div>

        <div
          className={`${
            !icon
              ? " max-lg:hidden "
              : "max-lg:absolute max-lg:bg-dark z-[99] max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:right-0 max-lg:min-h-screen visible block eq "
          }`}
        >
          <div className='max-lg:relative max-lg:h-full max-lg:w-full'>
            <ul
              className='lg:flex lg:justify-between xl:gap-10 max-lg:flex-col  gap-5  items-center justify-center text-center 
            max-lg:absolute max-lg:bottom-0 max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2  uppercase max-lg:space-y-10  '
            >
              {navContents.map((item) => (
                <div key={item.label}>
                  <li  className='uppercase text-sm '>
                    <Link
                      onClick={() => setIcon(false)}
                      href={item.href}
                      className={
                        pathName === item.href
                          ? "text-light underline  underline-offset-8"
                          : "text-light/40 "
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                </div>
              ))}
              <div className='text-end xl:ml-10 lg:ml-5'>
                {userAndToken?.user ? (
                  <div className='flex max-md:flex-col justify-end items-center  gap-5'>
                    <p  className='text-sm lowercase lg:hidden xl:block '>
                      {userAndToken.user.email}
                    </p>
                    <Button onClick={() => dispatch(logout())}>Logout</Button>
                  </div>
                ) : (
                  <Link
                    href='/sign-up'
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    Sign up
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div
            className={` ${
              !icon
                ? "absolute  right-5 top-6 px-1 py-1 cursor-pointer border border-light rounded-full lg:hidden flex items-center justify-center"
                : "active"
            }`}
          >
            <div className='mobile-navber-btn relative'>
              <CgMenu
                name='menu-outline'
                className='mobile-navber-icon  text-xl'
                onClick={() => setIcon(true)}
              />
              <CgClose
                name='close-outline'
                className='mobile-navber-icon  close-outline '
                onClick={() => setIcon(false)}
              />
            </div>
          </div>

          <div className='flex items-center max-lg:mr-10'>
            <Link href='/cart'>
              <GiDeliveryDrone className='text-2xl text-blue' />
            </Link>
            <span>({filteredCartItems?.length})</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navber;
