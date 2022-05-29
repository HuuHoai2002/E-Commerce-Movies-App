import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { Scroll } from "./layouts/components/scroll";
import { Header } from "./layouts/header";

const HomePage = React.lazy(() => import("./pages/Home/Home"));
const ProductDetails = React.lazy(() =>
  import("./pages/Details/ProductDetails")
);
const Footer = React.lazy(() => import("./layouts/footer/Footer"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Search = React.lazy(() => import("./pages/Search/Search"));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading ....</div>}>
        <Scroll />
        <Routes>
          <Route path={`${routes.home}`} element={<HomePage />} />
          <Route
            path={`${routes.details}/:slug`}
            element={<ProductDetails />}
          />
          <Route path={`${routes.search}`} element={<Search />} />
          {/* <Route path={`${routes.cart}`} element={<CartPage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default App;
