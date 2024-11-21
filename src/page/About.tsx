import React, { Suspense } from "react";

// Lazy load the components
const HowWeWork = React.lazy(() => import("../components/howwework/HowWeWork"));
const WhyUs = React.lazy(() => import("../components/whyus/WhyUs"));

export function AboutPage() {
  return (
    <section className="w-full h-full">
      {/* Use Suspense to wrap the lazy-loaded components */}
      <Suspense fallback={<div></div>}>
        <HowWeWork />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <WhyUs />
      </Suspense>
    </section>
  );
}
