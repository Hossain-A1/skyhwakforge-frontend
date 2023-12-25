"use client";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

/* STRIPE PROMISE */
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const session = useSelector((state: RootState) => state.auth.userAndToken);

  const [items] = cartItems;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: items.title,
    price: items.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  /* CHECKOUT HANDLER */
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    const stripe = await stripePromise;

    /* SEND A POST REQ. TO THE SERVER */
    const checkoutSession = await axios.post("https://skyhewkforge-api.vercel.app/api/create-checkout-session", {
      items: [items],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
      courseId: items._id,
    });

    /* REDIRECT TO THE STRIPE PAYMENT */
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data._id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className='wrapper py-10 min-h-screen'>
      <div className='flex justify-center'>
        <form
          onSubmit={handleCheckout}
          className='flex flex-col gap-5 mt-10 w-full lg:w-[35rem] text-dark'
        >
          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='name' className='cursor-pointer'>
              Name
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='text'
              id='name'
              placeholder='Sarah'
              value={formData.name}
              readOnly
            />
          </div>

          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='email' className='cursor-pointer'>
              Email
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='email'
              id='email'
              placeholder='hello@example.com'
              value={formData.email}
              readOnly
            />
          </div>

          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='mobile' className='cursor-pointer'>
              Phone number
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='tel'
              id='mobile'
              placeholder='+88017xxxxxxx'
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
            />
          </div>

          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='address' className='cursor-pointer'>
              Address
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='text'
              id='address'
              placeholder='ABC Street, NY'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>

          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='courseTitle' className='cursor-pointer'>
              Course title
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='text'
              id='courseTitle'
              placeholder='Advanced JavaScript Course 2023'
              value={formData.courseTitle}
              readOnly
            />
          </div>

          <div className='form-control flex flex-col gap-2'>
            <label htmlFor='price' className='cursor-pointer'>
              Price (USD)
            </label>
            <input
              className='outline-none border py-3 px-4 rounded-lg focus:border-gray-700'
              type='number'
              id='price'
              placeholder='$100'
              value={formData.price}
              readOnly
            />
          </div>

          <button
            role='link'
            type='submit'
            className='bg-black py-4 rounded-lg text-white hover:bg-gray-700 duration-300 uppercase'
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
