import ContactUs from "../components/contactUs/ContactUs";
import HeroSection from "../components/herosection/HeroSection";
import HowWeWork from "../components/howwework/HowWeWork";
import Service from "../components/ourservices/Service";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import WhyUs from "../components/whyus/WhyUs";



export default function Home() {
  return (
    <section className="w-full h-full flex flex-col">
         <HeroSection/>
         <WhoWeAre/>
         <Service />
         <HowWeWork/>
         <WhyUs/> 
         <ContactUs/>
      </section>
  )
}
