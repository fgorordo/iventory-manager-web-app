import { FC } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { mainRouterV1 } from "@/router";
import { store } from "@/store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={mainRouterV1} />
    </Provider>
  )
};

export default App;


