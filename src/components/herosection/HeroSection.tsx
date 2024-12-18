import React, { Suspense } from "react";
import GetStartedButton from "../buttons/GetStartedButton";

// Lazy load components for better performance
const HeroImageSvg = React.lazy(() => import("./HeroImageSvg"));
const ClientsAvatar = React.lazy(() => import('../avatars/ClientsAvatar'));

// Importing ClientsImageData with ES modules
import { ClientsImageData } from "./ClientsImageData";

export default function HeroSection() {
  const avatars = ClientsImageData;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between lg:pl-[8rem] pt-[3rem] lg:pt-0 gap-5 lg:gap-0">
      <div className="w-full lg:max-w-[42rem] flex flex-col justify-between h-full lg:h-[35rem] lg:mt-[4rem]">
        <div className="w-full flex flex-col items-center gap-5 lg:gap-4 lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start px-[0.7rem] md:px-[5rem] lg:px-0">
            <span className="text-red-500">Empowering</span> Your Vision with Innovative Tech Solutions
          </h1>
          <p className="w-full lg:max-w-[30rem] text-center lg:text-start px-[0.7rem] md:px-[8rem] lg:px-0 text-xl">
            At Evolve, we bridge the gap between your ideas and cutting-edge technology. Whether you're looking to build, scale, or transform, we deliver tailor-made solutions that drive success.
          </p>

          <GetStartedButton aria-label="Get Started with Evolve" />
        </div>

        {/* Stack profile here */}
        <div className="w-full flex items-center justify-center lg:justify-start pt-5 lg:pt-0">
          <Suspense fallback={<div></div>}>
            <ClientsAvatar avatars={avatars} />
          </Suspense>
        </div>
      </div>

      <div className="w-full h-full max-h-[500px] flex items-center justify-center lg:justify-end">
        <Suspense fallback={<div></div>}>
          <HeroImageSvg aria-label="Hero image representing tech solutions" />
        </Suspense>
      </div>
    </section>
  );
}
