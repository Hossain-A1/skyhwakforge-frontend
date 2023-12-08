"use client";
import { useState } from "react";
import Button from "./ui/Button";

const Support = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <main className='sp container mt-10 '>
      <section className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='flex flex-col items-center h-full w-full'>
          <form className='h-full w-[20rem] xl:w-[24rem] space-y-5'>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='name'>Name</label>
              <input
                required
                type='text'
                id='name'
                placeholder='Inter your name'
                className='px-4 py-2 outline-none bg-transparent border focus:border-blue rounded-md eq'
              />
            </div>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='email'>Email</label>
              <input
                required
                type='email'
                id='email'
                placeholder='Inter your email'
                className='px-4 py-2 outline-none bg-transparent border focus:border-blue rounded-md eq'
              />
            </div>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='password'>Password</label>
              <input
                required
                type='password'
                id='password'
                placeholder='Inter your password'
                className='px-4 py-2 outline-none bg-transparent border focus:border-blue rounded-md eq'
              />
            </div>
            <div className=''>
              <Button
                variant='secondary'
                type={"submit"}
                isLoading={loading}
                size='full'
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          delectus doloremque tenetur repellat cum laudantium doloribus,
          pariatur laborum dignissimos iste amet aliquid maiores odit reiciendis
          at perspiciatis, ab a voluptatem.
        </div>
      </section>
    </main>
  );
};

export default Support;
