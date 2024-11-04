import HeroSection from "../components/herosection/HeroSection";
import HowWeWork from "../components/howwework/HowWeWork";
import Service from "../components/ourservices/Service";
import WhyUs from "../components/whyus/WhyUs";



export default function Home() {
  return (
    <section className="w-full h-full">
         <HeroSection/>
         <Service />
         <HowWeWork/>
         <WhyUs/> 
      </section>
  )
}
