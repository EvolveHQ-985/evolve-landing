

export default function ContactUs() {
  return (
      <section className="w-full bg-gray-50 px-4 py-4 lg:px-[8rem] flex flex-col gap-5">
          <div className="flex flex-col gap-4">
              <b className="text-xl md:text-3xl text-red-500">GET STARTED!</b>

              <p>
                  At Evolve, we’re excited to turn your ideas into reality. Whether you need a dynamic website, a sleek mobile app, or captivating designs, our team is here to help every step of the way. Tell us about your project by filling out the form. Share your vision, your goals, and objectives, and we'll tailor our approach to meet your specific needs. Once you submit, we’ll review your information and get in touch to discuss how we can collaborate and bring your project to life. Let’s make something incredible together! 
              </p>

              <div className="flex flex-col gap-1">
                  <b className="font-normal">Contact us at:</b>
                  <span className="text-red-500">evolveteam@gmail.com</span>
              </div>
          </div>
          <form className="w-full flex flex-col gap-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-full">
                      <label>Name</label>
                      <div className="w-full lg:max-w-[40rem] h-[3rem] border-2 border-gray-400 rounded-lg overflow-hidden">
                          <input type="text" className="w-full h-full outline-none px-2 bg-transparent"/>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label>Email</label>
                      <div className="w-full lg:max-w-[40rem] h-[3rem] border-2 border-gray-400 rounded-lg overflow-hidden">
                          <input type="email" className="w-full h-full outline-none px-2 bg-transparent"/>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-full">
                      <label>What service do you want us to provide?</label>
                      <div className="w-full lg:max-w-[40rem] h-[3rem] border-2 border-gray-400 rounded-lg overflow-hidden">
                          <input type="text" className="w-full h-full outline-none px-2 bg-transparent"/>
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                      <label>Project name</label>
                      <div className="w-full lg:max-w-[40rem] h-[3rem] border-2 border-gray-400 rounded-lg overflow-hidden">
                          <input type="text" className="w-full h-full outline-none px-2 bg-transparent"/>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
                  <div className="flex flex-col gap-2 w-full">
                      <label>Briefly describe your project idea or requirements</label>
                      <div className="w-full h-[10rem] md:h-[15rem] border-2 border-gray-400 rounded-lg overflow-hidden">
                          <textarea className="w-full h-full outline-none px-2 py-2 bg-transparent resize-none"/>
                      </div>
                  </div>
              </div>
              <button className="bg-black max-w-[15rem] text-white py-2 rounded-lg">Submit</button>
          </form>
    </section>
  )
}
