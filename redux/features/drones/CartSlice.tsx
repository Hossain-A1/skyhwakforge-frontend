// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { droneType } from "@/types/drone.type";

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
      }
      // add to localStorage
      localStorage.setItem("items", JSON.stringify(state.droneType));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.droneType = state.droneType.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.droneType = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
