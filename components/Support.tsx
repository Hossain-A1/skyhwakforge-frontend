"use client";
import { useState } from "react";
import Button from "./ui/Button";
import SectionTitle from "./shared/SectionTitle";

const Support = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <main className='sp container lg:mt-10 space-y-5'>
      <SectionTitle
        title='support'
        headline='We are ready to help you any moments.'
      />
      <section className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='flex flex-col items-center h-full w-full'>
          <form className='h-full w-full xl:w-[24rem] space-y-5'>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='name'>Name</label>
              <input
                required
                type='text'
                id='name'
                placeholder='Inter your name'
                className='px-5 py-3 outline-none bg-transparent border focus:border-blue rounded-xl eq'
              />
            </div>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='email'>Email</label>
              <input
                required
                type='email'
                id='email'
                placeholder='Inter your email'
                className='px-5 py-3 outline-none bg-transparent border focus:border-blue rounded-xl eq'
              />
            </div>
            <div className='flex flex-col gap-2.5  w-full'>
              <label htmlFor='password'>Password</label>
              <input
                required
                type='password'
                id='password'
                placeholder='Inter your password'
                className='px-5 py-3 outline-none bg-transparent border focus:border-blue rounded-xl eq'
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
        <div className='space-y-5'>
          <h2 className='text-2xl font-semibold'>
            Our supports informations are given bellow.
          </h2>
          <div className='flex flex-col gap-5'>
            <h2 className='text-xl font-semibold'>
              Call us: <span className='text-lg font-medium'>+0373038373</span>
            </h2>
            <span className='text-lg font-medium'>skywhakforge@help.net</span>
            <span className='text-lg font-medium'>droneterm@help.net</span>
          </div>

          {/* trainers gose here */}

          <div></div>
        </div>
      </section>
    </main>
  );
};

export default Support;
