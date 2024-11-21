import React from "react";
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

import {
  MainLayouts,
  Home,
  Root,
  NotFoundPage,
  ServicesPage,
  AboutPage,
  Contact,
} from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      {/* Pages with Header inside here */}
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        {/* go to file /src/page/Products.tsx to modify the product page */}
        <Route path="/services" element={<ServicesPage />} />{" "}
        {/* go to file /src/page/Services.tsx to modify the product page */}
        <Route path="/about" element={<AboutPage />} />{" "}
        {/* go to file /src/page/About.tsx to modify the product page */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* go to file /src/page/About.tsx to modify the product page */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* Move ToastContainer here, outside of the routing elements */}
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
