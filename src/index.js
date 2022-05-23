import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { theme } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("main-app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
