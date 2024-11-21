import React, { Suspense } from "react";

// Lazy load components
const WhoWeAre = React.lazy(() => import("../components/WhoWeAre/WhoWeAre"));
const Service = React.lazy(() => import("../components/ourservices/Service"));
const HowWeWork = React.lazy(() => import("../components/howwework/HowWeWork"));
const WhyUs = React.lazy(() => import("../components/whyus/WhyUs"));
const Testimonials = React.lazy(() => import("../components/testimonials/Testimonials"));
const ContactSection = React.lazy(() => import("../components/contactsection/ContactSection"));

import HeroSection from "../components/herosection/HeroSection";

export default function Home() {
  return (
    <section className="w-full h-full">
      {/* Hero Section is loaded immediately */}
      <HeroSection />
      
      {/* Use Suspense for lazy-loaded components */}
      <Suspense fallback={<div></div>}>
        <WhoWeAre />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <Service />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <HowWeWork />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <WhyUs />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <ContactSection />
      </Suspense>
    </section>
  );
}
