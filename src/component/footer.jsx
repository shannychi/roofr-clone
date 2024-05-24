import React from "react";
import Logo from "../assets/Logo/Logowhite.svg";
import Fb from "../assets/socials/fb.svg";
import Ig from "../assets/socials/ig.svg";
import tiktok from "../assets/socials/tiktok.svg";
import tw from "../assets/socials/tw.svg";
import linkedin from "../assets/socials/in.svg"
import yt from "../assets/socials/yt.svg";

const Footer = () => {
  return (
    <footer class="w-full bg-blue-700">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-6 lg:gap-8 gap-12 pt-14 pb-20 ">
          <div class="block">
            <div>
              <img src={Logo} alt="" />
            </div>
           <div className="mt-5">
            <h4 className="text-white font-sans  font-semibold ">Connect with us</h4>
            <div className="flex gap-3 mt-3">
              <img src={Fb} alt="facebook" />
              <img src={tw} alt="facebook" />
              <img src={Ig} alt="facebook" />
              <img src={yt} alt="facebook" />
              <img src={linkedin} alt="facebook" />
              <img src={tiktok} alt="facebook" />
              
            </div>
           </div>
          </div>

          <div class="block">
            <h4 class=" text-white font-bold mb-7">Products</h4>
            <ul class=" text-sm transition-all duration-500">
              <li class="mb-6">
                <a href="" class="text-white font-semibold">
                  CRM
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white font-semibold">
                  Instant Estimator
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class="text-white font-semibold">
                  Measurement
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white font-semibold">
                 Proposals
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" text-white font-semibold">
                 Payments & Invoicing
                </a>
              </li>
            </ul>
          </div>
          <div class="block">
            <h4 class=" text-white font-bold mb-7">Help</h4>
            <ul class="text-sm font-semibold transition-all duration-500">
              <li class="mb-6">
                <a href="javascript:;" class="text-white">
                 Help center
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  Help articles
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  FAQs
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                 Reviewa
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" text-white">
                 Case studies
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" text-white">
                 Masterclasses
                </a>
              </li>
            </ul>
          </div>

          <div class="block">
            <h4 class=" text-white font-bold mb-7">Grow</h4>
            <ul class="text-sm font-semibold  transition-all duration-500">
              <li class="mb-6">
                <a href="javascript:;" class="text-white">
                  Masterclasses
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  Podcast
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                 Blog & press
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  Product updates
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" text-white">
                  Event
                </a>
              </li>

              <li>
                <a href="javascript:;" class=" text-white">
                  Roofr of the Month
                </a>
              </li>
            </ul>
          </div>


          <div class="block">
            <h4 class=" text-white font-bold mb-7">Company</h4>
            <ul class="text-sm font-semibold  transition-all duration-500">
              <li class="mb-6">
                <a href="javascript:;" class="text-white">
                  About
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  Partners
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                 Careers
                </a>
              </li>
              <li class="mb-6">
                <a href="javascript:;" class=" text-white">
                  Reviews
                </a>
              </li>
              <li>
                <a href="javascript:;" class=" text-white">
                  Case studies
                </a>
              </li>

              <li>
                <a href="javascript:;" class=" text-white">
                 Press
                </a>
              </li>
            </ul>
          </div>
          
          
          <div class="block">
          <div class=" lg:w-56 px-4 ">
    <div class="  border rounded-2xl bg-blue-200 bg-opacity-20 text-white text-start font-semibold text-sm px-4 pt-6 pb-8 shadow">
        <h3 class="text-1xl font-extrabold">
            Talk to a human
        </h3>
        <div class="mt-4">
            <span className="text-white font-semibold">1(844)995-4087</span>
        </div>
        <div class="mt-1">
            <span className="text-white font-semibold">support@rootfr.com</span>
        </div>
        <div class="mt-6">
            <div className="mt-3">Monday - Friday</div>
            <div className="mt-3">8am-8pm EST</div>
        </div>
        <div class="mt-6">
            <span>Connect with sales</span>
        </div>
        <div className="mt-8">
            <a href="" class="bg-white items-center hover:bg-blue-100 rounded-3xl text-black font-bold py-2 px-10">
                Book a call
            </a>
        </div>
    </div>
</div>
          </div>
        </div>

        <div class="py-7 border-t border-white ">
          <div class="flex items-center justify-center gap-4 text-white font-bold text-sm  flex-row lg:items-start lg:justify-normal">
           
           <span>Privacy</span>
           <span>|</span>
           <span>Terms & conditions</span>
           <span>|</span>
           <span>Guranteed delivery</span>
           <span>|</span>
           <span>Contact Sales</span>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
