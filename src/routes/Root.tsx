import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

// Lazy load the AutoResetPagesScroll component
const AutoResetPagesScroll = React.lazy(() =>
  import("../components/AutoResetPagesScroll/AutoResetPagesScroll")
);

function Root() {
  return (
    <div className="w-full h-full">
      {/* Wrap lazy-loaded component in Suspense */}
      <Suspense fallback={<div></div>}>
        <AutoResetPagesScroll />
      </Suspense>
      
      {/* Wrap Outlet to manage lazy-loaded nested routes */}
      <Suspense fallback={<div>Loading Page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Root;
