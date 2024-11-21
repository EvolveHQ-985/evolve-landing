import React, { Suspense } from "react";
import GetStartedButton from "../buttons/GetStartedButton";

// Lazy load SVG components
const MobileSvgWeWork = React.lazy(() => import("./MobileSvgWeWork"));
const SvgHowWeWorkImage = React.lazy(() => import("./SvgHowWeWorkImage"));

export default function HowWeWork() {
  return (
    <section className="w-full py-9 bg-red-50 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between w-full px-4 lg:px-[8rem] gap-9">
        <div className="w-full max-w-[490px] md:max-w-[990px] lg:max-w-[490px] flex flex-col md:items-center lg:items-start gap-5">
          <b className="text-xl md:text-3xl text-red-500 md:w-full md:text-center lg:text-start">
            HOW WE WORK
          </b>
          <div className="flex flex-col gap-5 md:items-center lg:items-start">
            <p className="md:text-center lg:text-start md:px-9 lg:px-0">
              At Evolve, we believe in a structured yet flexible approach to bring ideas to life. Our process is designed to foster creativity, collaboration, and efficiency, ensuring that we deliver solutions tailored to your needs. Here’s how we do it:
            </p>
            <div className="flex flex-col gap-2">
              <b className="flex items-center gap-5 text-xl md:justify-center lg:justify-start">
                <div className="w-5 h-5 bg-red-300 rounded-full"></div> Discovery & Strategy
              </b>
              <p className="md:text-center lg:text-start md:px-9 lg:px-0">
                We start by understanding your goals, audience, and challenges. Through research, workshops, and market analysis, we create a solid plan for success.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <b className="flex items-center gap-5 text-xl md:justify-center lg:justify-start">
                <div className="w-5 h-5 bg-purple-300 rounded-full"></div> Design and Development
              </b>
              <p className="md:text-center lg:text-start md:px-9 lg:px-0">
                Our designers turn ideas into wireframes and prototypes, focusing on user experience and aesthetics. Once finalized, our developers build the product using best practices, while our content writers ensure the messaging is clear and engaging.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <b className="flex items-center gap-5 text-xl md:justify-center lg:justify-start">
                <div className="w-5 h-5 bg-blue-300 rounded-full"></div> Launch and Growth
              </b>
              <p className="md:text-center lg:text-start md:px-9 lg:px-0">
                We rigorously test the product, then guide you through launch. Afterward, we monitor performance, gather feedback, and continually optimize to ensure sustained growth.
              </p>
            </div>
            <GetStartedButton aria-label="Get Started" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Suspense fallback={<div></div>}>
            <MobileSvgWeWork />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <SvgHowWeWorkImage />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
