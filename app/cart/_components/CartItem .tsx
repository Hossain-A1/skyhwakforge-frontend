import Button from "@/components/ui/Button";
import { removeFromCart } from "@/redux/features/carts/CartSlice";
import { droneType } from "@/types/drone.type";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface CartItemProps {
  addedCart: droneType;
}

const CartItem: React.FC<CartItemProps> = ({ addedCart }) => {
  const dispatch = useDispatch();
  return (
    <section className='border py-2'>
      <div className='grid grid-cols-7 text-center items-center gap-5'>
        <div>
          <strong>{addedCart._id.substring(0, 10)}</strong>
        </div>
        <div className='flex justify-start items-center col-span-2 gap-5'>
          <div className='overflow-hidden h-16 w-16 flex justify-center items-center'>
            <Image
              src={addedCart.images[0]}
              alt={addedCart.title}
              height={280}
              width={280}
              priority
              className='h-full w-full object-cover '
            />
          </div>
          <div>
            <strong>{addedCart.title.substring(0, 20)}</strong>
          </div>
        </div>

        <div>
          <strong>{addedCart.count}</strong>
        </div>

        <div>
          <strong>{addedCart.price}</strong>
        </div>

        <div>
          <strong>{addedCart.price * addedCart.count}</strong>
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
    </section>
  );
};

export default CartItem;
