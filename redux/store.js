"use client";

import { configureStore } from "@reduxjs/toolkit";

import setupReducer from "./slice/setupSlice.js";
import tokensReducer from "./slice/tokensSlice.js";

export const store = configureStore({
  reducer: {
    setup: setupReducer,
    token: tokensReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
