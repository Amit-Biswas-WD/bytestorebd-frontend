

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartFromStorage = () => {
  if (typeof window === "undefined") return undefined;

  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return { cart: JSON.parse(savedCart) };
    }
  } catch (error) {
    console.error("Cart load error:", error);
  }
  return undefined;
};

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadCartFromStorage(),
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    try {
      const state = store.getState();
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } catch (error) {
      console.error("Cart save error:", error);
    }
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
