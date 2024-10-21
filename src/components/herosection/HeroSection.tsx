import GetStartedButton from "../buttons/GetStartedButton";
import HeroImageSvg from "./HeroImageSvg";
import ClientsAvatar from '../avatars/ClientsAvatar';
import { ClientsImageData } from "./ClientsImageData";

export default function HeroSection() {
  const avatars = ClientsImageData


  return (
      <section className="flex flex-col lg:flex-row items-center justify-between lg:pl-[8rem] pt-[3rem] lg:pt-0 gap-5 lg:gap-0">
          <div className="w-full lg:max-w-[44rem] flex flex-col justify-between h-full lg:h-[35rem] lg:mt-[4rem]">
              <div className="w-full flex flex-col items-center gap-5 lg:gap-8 lg:items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-start px-[2rem] md:px-[5rem] lg:px-0"><span className="text-red-500">Empowering</span> Your Vision with Innovative Tech Solutions</h1>
                <p className="w-full lg:max-w-[30rem] text-center lg:text-start px-[2.8rem] md:px-[8rem] lg:px-0">At Evolve, we bridge the gap between your ideas and cutting-edge 
    technology. Whether you're looking to build, scale, or transform, we 
                    deliver tailor-made solutions that drive success.
                </p>

                <GetStartedButton/>
              </div>

              {/* Stack profile here */}
              <div className=" w-full flex items-center justify-center lg:justify-start pt-5 lg:pt-0">
               <ClientsAvatar avatars={avatars} />
              </div>
          </div>
          <div className="relative w-full h-full max-h-[640px] flex items-center justify-center lg:justify-end">
              <HeroImageSvg/>
              <div className="hidden absolute bg-transparent w-full h-full md:flex flex-col items-start justify-between">
                <div className="w-full h-4 bg-white"></div>
              </div>
          </div>
    </section>
  )
}
