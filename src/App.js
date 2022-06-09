import { onAuthStateChanged } from "firebase/auth";
import { Fragment, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { signIn, signOut } from "./actions/auth";
import { auth } from "./firebase/firebase-config";
import { Scroll } from "./layouts/components/scroll";
import { DefaultLayout } from "./layouts/default";
import { publicRoutes } from "./routes/routes";
import { ProtectedRoute } from "./utils/routes";

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
      <Suspense fallback={""}>
        <Scroll />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout {...route.content}>
                    {route.isPrivate ? (
                      <ProtectedRoute>
                        <Page />
                      </ProtectedRoute>
                    ) : (
                      <Page />
                    )}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
