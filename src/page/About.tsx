import React, { Suspense } from "react";

// Lazy load the components
const WhoWeAre = React.lazy(() => import("../components/WhoWeAre/WhoWeAre"));
const WhyUs = React.lazy(() => import("../components/whyus/WhyUs"));

export function AboutPage() {
  return (
    <section className="w-full h-full pt-5 md:pt-20">
      {/* Use Suspense to wrap the lazy-loaded components */}
      <Suspense fallback={<div></div>}>
        <WhoWeAre />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <WhyUs />
      </Suspense>
    </section>
  );
}
