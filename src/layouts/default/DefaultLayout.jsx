import { Fragment } from "react";
import Footer from "../footer/Footer";
import { Header } from "../header";

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
