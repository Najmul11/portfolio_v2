import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.ts";
import { router } from "./router/Routes.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThirdwebProvider
        activeChain={Polygon}
        clientId={import.meta.env.VITE_CLIENTID}
      >
        <RouterProvider router={router} />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);
