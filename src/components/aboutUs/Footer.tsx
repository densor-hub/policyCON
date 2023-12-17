// import logo from "../assets/logo.jpg";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import { RiMailSendFill } from "react-icons/ri";
import React from "react";
import Header from "./Header";

const Footer = () => {
  return (
    <main id="footer">
      <section className="bg-[red] text-white">
        <div className="bg-[rgb(0,0,0,0.3)] block text-center sm:text-left sm:flex justify-center">
          <div className="p-10">
            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.facebook.com/policycon"
                  target="_blank"
                >
                  {<TbWorldSearch size={50} />}
                </a>
                <a
                  href="https://www.facebook.com/policycon"
                  target="_blank"
                  className="relative left-5 "
                >
                  Visit Us
                </a>
              </div>
            </div>

            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                >
                  {<RiMailSendFill size={40} />}
                </a>
                <a
                  href="https://www.linkedin.com/company/abibeck-software-solutions/"
                  target="_blank"
                  className="relative left-5 "
                >
                  info@policycon.com
                </a>
              </div>
            </div>

            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.linkedin.com/company/policycon/"
                  target="_blank"
                >
                  {<BsLinkedin size={40} />}
                </a>
                <a
                  href="https://www.linkedin.com/company/policycon/"
                  target="_blank"
                  className="relative left-5 "
                >
                  PolicyCON
                </a>
              </div>
            </div>

          </div>

          <div className="p-10">

            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.facebook.com/policycon"
                  target="_blank"
                >
                  {<BsFacebook size={40} />}
                </a>
                <a
                  href="https://www.facebook.com/policycon"
                  target="_blank"
                  className="relative left-5 "
                >
                  policycon
                </a>
              </div>
            </div>

            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.instagram.com/policycon_"
                  target="_blank"
                >
                  {<BsInstagram size={40} />}
                </a>
                <a
                  href="https://www.instagram.com/policycon_"
                  target="_blank"
                  className="relative left-5 "
                >
                  @policycon_
                </a>
              </div>
            </div>

            <div className=" sm:flex pt-2 mb-4 border-2 border-white sm:border-0">
              <div className="pb-3 sm:pb-0 sm:pr-8 flex justify-center">
                <a
                  href="https://www.twitter.com/policycon"
                  target="_blank"
                >
                  {<BsTwitter size={40} />}
                </a>
                <a
                  href="https://www.twitter.com/policycon"
                  target="_blank"
                  className="relative left-5 "
                >
                  policycon
                </a>
              </div>
            </div>



          </div>
        </div>
        <div className="text-white text-[12px] py-4  text-center bg-[rgb(0,0,0,0.5)]">
          PolicyCon {""}
          {new Date().getFullYear()}
        </div>
      </section>
    </main>
  );
};

export default Footer;
