import React, { Suspense } from "react";

// Lazy load the ContactSection component
const ContactSection = React.lazy(() => import("../components/contactsection/ContactSection"));

export default function ContactUs() {
  return (
    <section className="w-full h-full">
      {/* Use Suspense to wrap the lazy-loaded ContactSection */}
      <Suspense fallback={<div></div>}>
        <ContactSection />
      </Suspense>
    </section>
  );
}
