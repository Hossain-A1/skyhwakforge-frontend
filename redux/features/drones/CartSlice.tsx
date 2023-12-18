// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { droneType } from '@/types/drone.type';

interface CartState {
  items: droneType[];
}

const initialState: CartState = {
  items:[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      // if exist
      if (existedItemIndex >= 0) {
        state.items[existedItemIndex].count += 1;
        
      } else {
        // add to cart
        const assembled = { ...action.payload, cartQuantity: 1 };
        state.items.push(assembled);
   
      }
      // add to localStorage
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
