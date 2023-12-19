import { droneType } from "@/types/drone.type";
import Image from "next/image";

interface CartItemProps {
  addedCart: droneType;
}

const CartItem: React.FC<CartItemProps> = ({ addedCart }) => {
  return (
    <section className="border py-2">
      <div className='grid grid-cols-6 text-center items-center gap-5'>
        <div>
          <strong>{addedCart._id.substring(0, 10)}</strong>
        </div>
        <div className='flex justify-center items-center'>
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
        </div>

        <div>
          <strong>{addedCart.title}</strong>
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
      </div>
    </section>
  );
};

export default CartItem;
