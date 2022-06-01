import { onAuthStateChanged } from "firebase/auth";
import { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { signIn, signOut } from "./actions/auth";
import { Loading } from "./components/loading";
import { routes } from "./config/routes";
import { auth } from "./firebase/firebase-config";
import { Scroll } from "./layouts/components/scroll";
import { Header } from "./layouts/header";
import { ProtectedRoute } from "./utils/routes";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductDetails = lazy(() => import("./pages/Details/ProductDetails"));
const Footer = lazy(() => import("./layouts/footer/Footer"));
const Search = lazy(() => import("./pages/Search/Search"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Signup = lazy(() => import("./pages/Sign/Signup"));
const Signin = lazy(() => import("./pages/Sign/Signin"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          signIn({
            email: userAuth.email,
            userId: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(signOut({}));
      }
    });
  }, [dispatch]);
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loading className="border-[3px]" />}>
        <Scroll />
        <Routes>
          <Route path={`${routes.home}`} element={<Home />} />
          <Route
            path={`${routes.details}/:slug`}
            element={<ProductDetails />}
          />
          <Route path={`${routes.search}`} element={<Search />} />
          <Route path={`${routes.cart}`} element={<Cart />} />
          <Route path={`${routes.signup}`} element={<Signup />} />
          <Route
            path={`${routes.signin}`}
            element={
              <ProtectedRoute>
                <Signin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default App;
