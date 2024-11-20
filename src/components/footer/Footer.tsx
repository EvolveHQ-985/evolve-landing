import { CiLinkedin, CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center gap-10 pt-10">
      <div className="flex flex-col w-full items-center justify-center gap-5 px-5">
        <b className="text-xl">Stay Updated! 🚀</b>
        <p className="w-full max-w-[42rem] text-center text-gray-300">
          Stay updated with Evolve! Subscribe to our notifications for exciting
          updates, exclusive offers, and the latest in tech and design.
        </p>
        <form className="bg-white w-full max-w-[500px] h-[3rem] rounded overflow-hidden px-3 py-1 flex items-center gap-3 justify-between">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent h-full w-[70%] outline-none text-gray-600"
          />
          <button className="bg-gray-800 px-5 py-1 rounded">Subscribe</button>
        </form>
      </div>
      <div className="w-full px-5 md:px-20">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-9">
          <div className="w-full max-w-[130px] flex flex-col gap-3">
            <b className="text-xl">Quick Links</b>
            <Link to="/" className="text-gray-300">
              Home
            </Link>
            <Link to="/services" className="text-gray-300">
              Services
            </Link>
            <Link to="/howItWorks" className="text-gray-300">
              How it works
            </Link>
            <Link to="#testimonies" className="text-gray-300">
              Testimonials
            </Link>
            <Link to="#Pricing" className="text-gray-300">
              Pricing
            </Link>
            <Link to="#FAQ" className="text-gray-300">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-300">
              Contact
            </Link>
          </div>
          <div className="w-full max-w-[150px] flex flex-col gap-3">
            <b className="text-xl">About</b>
            <Link to="/" className="text-gray-300">
              Company profile
            </Link>
            <Link to="/services" className="text-gray-300">
              Careers
            </Link>
            <Link to="#howItWorks" className="text-gray-300">
              Our team
            </Link>
          </div>
          <div className="w-full max-w-[170px] flex flex-col gap-3">
            <b className="text-xl">More</b>
            <Link to="/" className="text-gray-300">
              Pricacy policy
            </Link>
            <Link to="#Services" className="text-gray-300">
              Terms & Conditions
            </Link>
          </div>
          <div className="w-full max-w-[300px] flex flex-col gap-3">
            <b className="text-xl">Contacts</b>
            <p className="text-gray-300 w-full max-w-[15rem]">
              Do have a question you need help? Get in touch:
            </p>
            <p className="text-gray-300">Mon - Fri (7am - 6pm)</p>
            <a
              href="mailto:evolve985@gmail.com"
              className="flex items-center gap-2 text-gray-300"
            >
              <CiMail className="font-bold text-white" /> <span>Email:</span>{" "}
              evolve985@gmail.com
            </a>

            <div className="flex items-baseline gap-3">
              <Link to="#Pricing">
                <RiTwitterXFill className="text-xl" />
              </Link>
              <Link to="#FAQ">
                <IoLogoInstagram className="text-xl" />
              </Link>
              <Link to="#contact">
                <CiLinkedin className="text-xl" />
              </Link>
              <Link to="#contact">
                <RiFacebookFill className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-t-2 w-full text-center border-gray-600 text-gray-500">
        Copyright © 2024 Evolve
      </div>
    </section>
  );
}
