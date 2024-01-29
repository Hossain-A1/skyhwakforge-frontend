import { cn } from "@/lib/utils";
import { buttonVariants } from "../components/ui/Button";
import Link from "next/link";

const Access = () => {
  return (
    <div className="flex flex-col items-center ">

      <hr className='border border-dark/10 ' />
      <div className='my-5'>
        <div className='flex flex-col gap-2 items-center py-5'>
          <span className='text-sm'>See personalized recommendations</span>
          <Link
            href='/sign-in'
            className={cn(
              buttonVariants({ variant: "deepLight" }),
              "block w-[15rem] py-1 capitalize rounded"
            )}
          >
            sign in
          </Link>
          <p className='flex text-xs gap-1'>
            New Customer?{" "}
            <a
              href='/sign-up'
              className='text-blue hover:text-orange eq text-xs'
            >
              Start here.
            </a>
          </p>
        </div>
        <hr className='border border-blue/70 ' />
      </div>

      <div className='bg-blue/30 w-full py-3 hover:bg-blue/40 eq'>
        <Link href='/' className='text-center block text-light text-sm'>
          Back to top
        </Link>
      </div>
    </div>
  );
};

export default Access;