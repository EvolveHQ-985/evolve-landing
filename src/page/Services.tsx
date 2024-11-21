import React, { Suspense } from "react";

// Lazy load the Service component
const Service = React.lazy(() => import("../components/ourservices/Service"));

export function ServicesPage() {
  return (
    <section className="w-full h-full">
      {/* Wrap the Service component in Suspense */}
      <Suspense fallback={<div>Loading Services...</div>}>
        <Service />
      </Suspense>
    </section>
  );
}
