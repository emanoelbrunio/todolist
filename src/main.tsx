import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { AppRoutes } from "./routes/index.routes.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
