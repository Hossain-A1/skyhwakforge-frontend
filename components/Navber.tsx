"use client";
import Link from "next/link";
import { GiDeliveryDrone } from "react-icons/gi";
import { buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Navber = () => {
  const pathName = usePathname();

  const navContents = [
    { href: "/", label: "home" },
    { href: "/about-us", label: "about" },
    { href: "/drones-page", label: "drones" },
    { href: "/galleries", label: "galleries" },
    { href: "/offers", label: "offers" },
    { href: "/support", label: "support" },
  ];

  return (
    <header className='h-20 flex items-center fixed top-0 left-0 right-0 z-[9999] bg-dark'>
      <nav className='container flex justify-between items-center '>
        <div>
          <h2 className='text-blue  font-semibold'>SkyHawkForge</h2>
        </div>

        <div>
          <ul className='flex items-center gap-10'>
            {navContents.map((item) => (
              <li key={item.label} className='uppercase text-sm'>
                <Link
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
          <span className='flex items-center'>
            <GiDeliveryDrone className='text-2xl text-blue' />
            <h3>(12)</h3>
          </span>

          <div>
            <Link
              href='/sign-up'
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
