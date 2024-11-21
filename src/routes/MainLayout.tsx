import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

// Use lazy to load Header and Footer components
const Header = React.lazy(() => import("../components/navbar/Header"));
const Footer = React.lazy(() => import("../components/footer/Footer"));

const MainLayouts = () => {
  return (
    <main className="h-full w-full">
      {/* Use Suspense to wrap lazy-loaded components */}
      <Suspense fallback={<div></div>}>
        <Header />
      </Suspense>
      
      <section className="h-full md:px-0 w-full pb-[0.5rem]">
        <Outlet />
      </section>
      
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default MainLayouts;
