import HowWeWork from "../components/howwework/HowWeWork";
import Service from "../components/ourservices/Service";
import WhyUs from "../components/whyus/WhyUs";



export default function Home() {
  return (
    <section className="w-full h-full">
      <Service />
      <HowWeWork/>
         <WhyUs/> 
      </section>
  )
}
