"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CartItem from "./_components/CartItem ";


const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.droneType);

 
  return (
    <main className='container sp mt-10 space-y-5 '>
     
      <h2 className="text-2xl font-semibold uppercase text-center">You have added ({cart.length})cart{cart?.length >= 1?"s":"You do not add any cart."}</h2>
     
      <div className="grid grid-cols-6 text-center items-center gap-5 border-4 py-3 text-blue font-bold text-xl">
          <h2>id</h2>
          <h2>Items</h2>
          <h2>Name</h2>
          <h2>Qty</h2>
          <h2>price</h2>
          <h2>Total</h2>
        </div>
    <div className=" space-y-5">
    {cart &&
        cart?.map((addedCart) => (
          <CartItem key={addedCart._id} addedCart={addedCart} />
        ))}
    </div>
    </main>
  );
};

export default CartPage;
