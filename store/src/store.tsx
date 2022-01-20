import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { posts } from "./services/api/post";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([posts.middleware]),
});

export const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
