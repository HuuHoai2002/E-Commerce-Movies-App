import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { Footer } from "./layouts/footer";
import { routes } from "./config/routes";
import { Header } from "./layouts/header";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path={`${routes.home}`} element={<HomePage />} />
          <Route
            path={`${routes.details}/:slug`}
            element={<ProductDetails />}
          />
          <Route path={`${routes.cart}`} element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
