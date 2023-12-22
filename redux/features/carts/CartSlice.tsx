// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { droneType } from "@/types/drone.type";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [] as droneType[],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      // if exist
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].count += 1;
      } else {
        // add to cart
        const assembled = { ...action.payload, count: 1 };
        state.cartItems.push(assembled);
        toast.success("Drone added Successfully!");
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      toast(`Drone ${action.payload} removed Successfully!`, {
        icon: "👏",
      });
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    // increase
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].count += 1;
        toast.success("Quentity increased");
      }
    },

    // decrease
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (state.cartItems[itemIndex].count > 1) {
        state.cartItems[itemIndex].count -= 1;

        toast.success("❌ Quentity decreased!");
      } else if (state.cartItems[itemIndex].count === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        state.cartItems = updatedCartItems;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseCart,
  decreaseCart,
} = cartSlice.actions;
export default cartSlice.reducer;
