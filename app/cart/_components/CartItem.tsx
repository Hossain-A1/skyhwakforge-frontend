"use client";

import { CurrencyFormatter } from "@/components/shared/CurrencyFormatter";
import Button from "@/components/ui/Button";
import {
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "@/redux/features/carts/CartSlice";
import { RootState } from "@/redux/store";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

interface CartItemProps {
  addedCart: droneType;
}

const CartItem: React.FC<CartItemProps> = ({ addedCart }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
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

  return (
    <section className='space-y-10'>
      <div className='grid grid-cols-7 text-center items-center gap-5 border py-3'>
        <div>
          <strong>{addedCart?._id?.substring(0, 10)}</strong>
        </div>
        <div className='flex justify-start items-center col-span-2 gap-5'>
          <div className='overflow-hidden h-16 w-16 flex justify-center items-center'>
            <Image
              src={addedCart.images && addedCart.images[0]}
              alt={addedCart.title}
              height={280}
              width={280}
              priority
              className='h-full w-full object-cover '
            />
          </div>
          <div>
            <strong>{addedCart?.title?.substring(0, 20)}</strong>
          </div>
        </div>

        <div className='flex items-center gap-5 bg-light/70 border px-6 py-2 rounded-md'>
          <button
            className='text-2xl font-semibold text-dark'
            onClick={() => dispatch(decreaseCart(addedCart._id))}
          >
            -
          </button>
          <strong className='text-2xl font-semibold text-dark'>
            {addedCart.count}
          </strong>
          <button
            className='text-2xl font-semibold text-dark'
            onClick={() => dispatch(increaseCart(addedCart._id))}
          >
            +
          </button>
        </div>

        <div>
          <strong>
            <CurrencyFormatter amount={addedCart.price} />
          </strong>
        </div>

        <div>
          <strong>
            <CurrencyFormatter amount={addedCart.price * addedCart.count} />{" "}
          </strong>
        </div>

        <div>
          <Button
            onClick={() => dispatch(removeFromCart(addedCart._id))}
            variant='danger'
          >
            Remove
          </Button>
        </div>
      </div>

      {/* checkout ui */}
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <button>hello</button>
        </div>
        <div>
          <span>Subtotal</span>
          <button>{total()}</button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
