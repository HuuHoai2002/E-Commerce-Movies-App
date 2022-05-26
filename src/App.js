import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading ....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default App;
