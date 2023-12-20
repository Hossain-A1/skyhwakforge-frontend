// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { droneType } from "@/types/drone.type";
import toast from "react-hot-toast";

interface CartStateInt {
  droneType: droneType[];
}

const initialState: CartStateInt = {
  droneType: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.droneType.findIndex(
        (item) => item._id === action.payload._id
      );
      // if exist
      if (existedItemIndex >= 0) {
        state.droneType[existedItemIndex].count += 1;
      } else {
        // add to cart
        const assembled = { ...action.payload, cartQuantity: 1 };
        state.droneType.push(assembled);
        toast.success("Drone added Successfully!");
      }
      // add to localStorage
      localStorage.setItem("items", JSON.stringify(state.droneType));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.droneType = state.droneType.filter(
        (item) => item._id !== action.payload
      );
      toast("Drone removed Successfully!", {
        icon: "👏",
      });
    },
    clearCart: (state) => {
      state.droneType = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
