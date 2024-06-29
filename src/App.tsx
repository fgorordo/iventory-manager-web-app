import { FC } from "react";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./core/store";
import { RouterProvider } from "react-router-dom";
import { appRoutesV1 } from "./core/router";

export const App: FC = (): JSX.Element => {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={appRoutesV1}/>
    </StoreProvider>
  );
};