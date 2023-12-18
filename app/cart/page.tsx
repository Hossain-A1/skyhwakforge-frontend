"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  console.log(cart);
  return (
    <main className='container sp mt-10'>
      <div>
        {cart && cart?.map((cartItem)=>(
          <div key={cartItem._id}>
            <h1>{cartItem.about}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CartPage;
