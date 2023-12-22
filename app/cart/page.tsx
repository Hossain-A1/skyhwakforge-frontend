"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CartItem from "./_components/CartItem";



const CartPage = () => {
  const {cartItems }= useSelector((state: RootState) => state.cart);

 
  return (
    <main className='container sp mt-10 space-y-5 '>
     
      <h2 className="text-2xl font-semibold uppercase text-center"> {cartItems?.length > 0? ` you've added ${cartItems?.length}  product${cartItems?.length > 1 ? "s" : ''}` : "Cart is empty"}</h2>
     
      <div className="grid grid-cols-7 text-center items-center gap-5 border-4 py-3 border-blue font-bold text-sm uppercase">
          <h2>#id</h2>
          <h2 className="col-span-2 text-start">Items</h2>
     
          <h2>Quantity</h2>
          <h2>unit price</h2>
          <h2>Total Price</h2>
        </div>
    <div className=" space-y-5">
    {
       cartItems && cartItems?.map((addedCart) => (
          <CartItem key={addedCart._id} addedCart={addedCart} />
        ))}
    </div>
    </main>
  );
};

export default CartPage;
