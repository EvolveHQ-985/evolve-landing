import LeftHandMobileSvg from "./LeftHandMobileSvg";
import LeftHandSvg from "./LeftHandSvg";
import RightHandMobileSvg from "./RightHandMobileSvg";
import RightHandSvg from "./RightHandSvg";


export default function WhoWeAre() {
  return (
    <section className="w-full h-auto px-2 lg:px-20 md:pt-1">
      <div className="relative flex justify-between w-full h-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full gap-[14rem] md:gap-0">
          <div className=" h-full flex justify-start">
            <LeftHandSvg />
            <LeftHandMobileSvg />
          </div>
          <div className="h-full flex justify-end">
            <RightHandSvg />
            <RightHandMobileSvg />
          </div>
        </div>
        
        <div className="absolute bg-transparent w-full h-full py-2 px-3">
          <div className="w-full h-full flex flex-col gap-8 lg:flex-row md:items-center md:justify-between">
            <div className="h-auto pt-9 flex flex-col gap-3 md:gap-9 lg:gap-3 lg:max-w-[35rem]">
              <b className="text-xl md:text-3xl text-red-500">WHO WE ARE</b>
              <p>At Evolve, we are a dynamic team of passionate creatives and developers 
dedicated to transforming ideas into innovative digital experiences. Our diverse 
expertise spans across product design, graphic design, content creation, and 
full-stack development. We believe that design and technology should work 
seamlessly together, creating solutions that not only look great but perform 
                exceptionally.
              </p>
              <button className="hidden md:block bg-black text-white w-[10rem] py-3 rounded-lg">Get Started</button>
            </div>
            <div className="w-full h-[11rem] md:w-[40rem] md:h-[20rem] rounded-xl overflow-hidden shadow-xl">
              <img src="https://media.istockphoto.com/id/2115292100/photo/four-cheerful-adults-enjoying-coffee-break-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=YIx9rxS_-TMdc-DqlYQimppr3cmkQAvJEKnnoFSYWH4=" alt="#"
                className="w-full h-full bg-cover object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
