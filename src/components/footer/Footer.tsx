import { CiLinkedin, CiMail } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <section className="w-full bg-black text-white flex flex-col items-center justify-center gap-10 pt-10">
          <div className="flex flex-col w-full items-center justify-center gap-5 px-5">
              <b className="text-2xl">Stay Updated! 🚀</b>
              <p className="w-full max-w-[42rem] text-center text-gray-300 text-md">Stay updated with Evolve! Subscribe to our notifications for exciting updates, exclusive offers, and the latest in tech and design.</p>
              <form className="bg-white w-full max-w-[500px] h-[3rem] rounded overflow-hidden px-3 py-1 flex items-center gap-3 justify-between">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent h-full w-[70%] outline-none text-gray-600"
                  />
                  <button className="bg-gray-800 px-5 py-1 rounded text-xl">Subscribe</button>
              </form>
          </div>
          <div className="w-full px-5 md:px-20">
              <div className="w-full flex flex-col md:flex-row md:justify-between gap-9">
                  <div className="w-full max-w-[130px] flex flex-col gap-3">
                      <b className="text-2xl">Quick Links</b>
                      <Link to='/' className="text-gray-300 text-md">Home</Link>
                      <a href="#services" className="text-gray-300 text-md">Services</a>
                      <a href="#howItWorks" className="text-gray-300 text-md">How it works</a>
                      <a href="#testimonies" className="text-gray-300 text-md">Testimonials</a>
                      <a href="#Pricing" className="text-gray-300 text-md">Pricing</a>
                      <a href="#FAQ" className="text-gray-300 text-md">FAQ</a>
                      <a href="#contact" className="text-gray-300 text-md">Contact</a>
                  </div>
                  <div className="w-full max-w-[150px] flex flex-col gap-3">
                      <b className="text-2xl">About</b>
                      <Link to='/' className="text-gray-300 text-md">Company profile</Link>
                      <a href="#Services" className="text-gray-300 text-md">Careers</a>
                      <a href="#howItWorks" className="text-gray-300 text-md">Our team</a>
                  </div>
                  <div className="w-full max-w-[170px] flex flex-col gap-3">
                      <b className="text-2xl">More</b>
                      <Link to='/'className="text-gray-300 text-md">Pricacy policy</Link>
                      <a href="#Services" className="text-gray-300 text-md w-full max-w-[50rem]">Terms & Conditions</a>
                  </div>
                  <div className="w-full max-w-[300px] flex flex-col gap-3">
                      <b className="text-2xl">Contacts</b>
                      <p className="text-gray-300 w-full max-w-[15rem] text-md">Do have a question you need help? Get in touch:</p>
                      <p className="text-gray-300 text-md">Mon - Fri (7am - 6pm)</p>
                      <a href="mailto:evolve985@gmail.com" className="flex items-center gap-2 text-gray-300 text-md"><CiMail className="font-bold text-white"/> <span>Email:</span> evolve985@gmail.com</a>
                      <a href="tel:+2342551547785" className="flex items-center gap-2 text-gray-300 text-md"><HiOutlinePhone /><span>Phone:</span> +234 255 154 7785</a>
                      <div className="flex items-baseline gap-3">
                        <a href="#Pricing"><RiTwitterXFill className="text-xl"/></a>
                        <a href="#FAQ"><IoLogoInstagram className="text-xl"/></a>
                        <a href="#contact"><CiLinkedin className="text-xl"/></a>
                        <a href="#contact"><RiFacebookFill className="text-xl"/></a>
                      </div> 
                  </div>
              </div>
          </div>
          <div className="py-5 border-t-2 w-full text-center border-gray-600 text-gray-500">Copyright © 2024 Evolve</div>
    </section>
  )
}
