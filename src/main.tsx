import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Lazy load components
const MainLayouts = lazy(() => import("./App").then(module => ({ default: module.MainLayouts })));
const Home = lazy(() => import("./App").then(module => ({ default: module.Home })));
const Root = lazy(() => import("./App").then(module => ({ default: module.Root })));
const NotFoundPage = lazy(() => import("./App").then(module => ({ default: module.NotFoundPage })));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      {/* Pages with Header inside here */}
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
    {/* ToastContainer should be outside of Suspense to load immediately */}
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>
);
