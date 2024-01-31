"use client";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./_components/CartItem";
import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import Button, { buttonVariants } from "@/components/ui/Button";
import { clearCart } from "@/redux/features/carts/CartSlice";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

// stripe payment
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const CartPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const  user  = useSelector((state: RootState) => state.auth.userAndToken?.user);

 

  const dispatch = useDispatch();
  /* SUBTOTAL CALCULATION */
  const total = () => {
    const calcTotal = cartItems.reduce(
      (acc, item) => (acc += item.price * item.count),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = <CurrencyFormatter amount={fixedTotal} />;

    return subtotal;
  };

  const router = useRouter()
  const handlePayment = async () => {
    if(!user){
     return router.push('/sign-in')
    }
    setLoading(true)
    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error("Failed to load Stripe script");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-checkout-session`,
      {
        items: cartItems,
      }
    );

    const session = await response.data;

    // Check if the session is valid
    if (!session || !session.id) {
      throw new Error("Invalid checkout session");
    }

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <main className='container sp mt-10 space-y-5 min-h-screen'>
      <h2 className='text-2xl font-semibold uppercase text-center'>
        {" "}
        {cartItems?.length > 0
          ? ` you've added ( ${cartItems?.length} )  product${
              cartItems?.length > 1 ? "s" : ""
            }`
          : "Cart is empty"}
      </h2>

      <div className='max-lg:hidden grid grid-cols-7  text-center items-center gap-5 border-4 py-3 border-blue font-bold text-sm uppercase'>
        <h2>#id</h2>
        <h2 className='col-span-2 text-start'>Items</h2>

        <h2>Quantity</h2>
        <h2>unit price</h2>
        <h2>Total Price</h2>
      </div>
      <div className=' space-y-10'>
        {cartItems &&
          cartItems?.map((addedCart) => (
            <CartItem key={addedCart._id} addedCart={addedCart} />
          ))}

        {/* checkout ui */}
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20'>
          <div>
            <Button onClick={() => dispatch(clearCart())} variant='primary'>
              Clear All Carts
            </Button>
          </div>
          <div className='space-y-5'>
            <div className='flex justify-end gap-10 items-center'>
              <h2 className='text-2xl font-semibold'>Subtotal ⇒</h2>
              <button className='text-xl font-bold text-blue'>{total()}</button>
            </div>

            <div className='flex justify-end items-center whitespace-normal  '>
              <p>
                Taxes are already added to the displayed price of our product.
              </p>
            </div>
            <div className='flex justify-center  lg:gap-10 gap-1  items-center '>
              <Link
                href='/drones-page'
                className={cn(buttonVariants({ variant: "deepLight" }))}
              >
                Back to Shopping
              </Link>
              <Button
                onClick={handlePayment}
               variant='secondary' size='full' isLoading={loading}
              >
            
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
