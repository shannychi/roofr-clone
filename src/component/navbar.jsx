import React, { useState } from "react";
import Logo from "../assets/Logo/6493173e3cea69ef8852e844_Roofr-Logo-Colour_Dark@2x.webp"
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineRadiusUpleft } from "react-icons/ai";
import { MdRoofing } from "react-icons/md";
import { RiFileTextLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { FaQ } from "react-icons/fa6";
import { PiStarThin } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { SlLayers } from "react-icons/sl";
import { IoShieldOutline } from "react-icons/io5";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { BsHddStack } from "react-icons/bs";
import { FaAsymmetrik } from "react-icons/fa";




const Navbar = () => {

    const [isMenuVisible, setMenuVisibility] = useState(false);
    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible)
    }
    return(
        <nav className="flex  gap-20 flex-wrap items-center justify-between lg:justify-start p-4  bg-blue-50">
    <img src={Logo}  alt="roofr" className=" w-20 font-extralight" />
    <div class="flex lg:hidden">
        <button id="hamburger" onClick={toggleMenu}>
        <div
    class="group flex h-10 w-20 cursor-pointer items-center justify-center">
    <div class="space-y-2">
        <span class={`block h-0.5 w-10 origin-center rounded-full   bg-neutral-900 transition-transform ease-in-out  ${isMenuVisible ? 'rotate-45' : ''}`}></span>
        <span class={`block h-0.5 w-10 origin-center rounded-full bg-neutral-900 transition-transform ease-in-out ${isMenuVisible ? '-translate-y-2.5 -rotate-45': ''}`}></span>
        <span class={`block h-0.5 w-10 origin-center rounded-full   bg-neutral-900 transition-transform ease-in-out ${isMenuVisible ? 'hidden' : ''}`}></span>
        
    </div>
</div>
        </button>
    </div>

    <div
        className={ `w-full lg:w-auto  lg:justify-around lg:gap-8 lg:flex ${isMenuVisible ? '' : 'hidden'} text-right text-bold `}>

         {/* products  dropdown */}
      <div className="lg:justify-between lg:grow flex lg:gap-20">
      <div className="group relative  cursor-pointer py-2">
        <div className="flex ">
        <a href="#"
            className=" menu-hover block lg:inline-block text-black hover:text-black px-3 py-3  text-sm font-sans font-bold">Products
            </a>
        <span className="mt-4 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span> 
        </div>

        <div className="invisible   lg:ml-10 absolute z-50 h-screen lg:h-auto w-auto lg:w-auto lg:mr-4  bg-gray-100 lg:py-1 lg:px-6 shadow-xl rounded-3xl  group-hover:animate-slideinright group-hover:visible lg:group-hover:animate-none">
      <div>
      <a class="flex flex-col   border-b mt-2 h-20 w-auto rounded-md border-gray-100 font-semibold text-gray-500 hover:bg-gray-200 ">
                <div className="flex  flex-row gap-1  w-96">
                <RiBarChartBoxLine className=" fill-blue-500 mt-1"/>
                <h2 className=" items-start text-black font-sans font-extrabold">CRM</h2>
                <p  className=" text-xs font-sans w-1 h-1 text-blue-500 font-extrabold mt-1">New</p>
                </div>
                <p className="text-gray-600 mr-16 w-fit">Manage your entire sales process from end to end.</p>
            </a>
      </div>

            <div className="flex flex-col lg:flex-row gap-5 mr-10 ">
            <a class="m-2 flex flex-col  text-sm border-b rounded-2xl border-gray-100  font-semibold  hover:bg-gray-200 md:mx-2">
               <div className="flex gap-1">
               <AiOutlineRadiusUpleft className=" fill-blue-600 mt-1 w-5 h-5"/>
                <h2 className=" text-black font-sans font-semibold">Instant Estimates</h2>
               </div>
                <div className="lg:w-40 w-full"><p className="text-gray-500 text-start">Instant estimates that let you qualify & quote fast.</p></div>
            </a>

            <a class=" text-sm m-2 flex flex-col rounded-2xl  border-b border-gray-100 font-semibold  hover:bg-gray-200 md:mx-2">
              <div className="flex gap-1">
              <RiFileTextLine  className=" fill-blue-600 h-4 w-4 mt-1"/>
                <h1 className="text-black font-sans font-semibold">Proposals</h1>
              </div>
                <p className="text-gray-500 font-sans lg:w-40 w-full text-start">Stunning contracts that close deals 10X faster.</p>
            </a>
            </div>

           

           <div className="flex flex-col lg:flex-row gap-5 ">
           <a class="text-sm m-2 flex flex-col border-b rounded-2xl border-gray-100 py-1 font-semibold  hover:bg-gray-200 md:mx-2">
                <div className="flex gap-1 w-full">
                <MdRoofing className=" fill-blue-600 w-6 h-6"/>
                <h1 className="text-black font-semibold font-sans">Measurements</h1>
                </div>
                <p className=" text-gray-500 font-sans w-full lg:w-48 text-start">$12 roof reports delivered in as little as 3 hours.</p>
            </a>

            <a class="text-sm m-2 flex flex-col rounded-2xl  border-b border-gray-100 py-1 font-semibold  hover:bg-gray-200 md:mx-2">
                <div className="flex gap-1">
                <MdPayment className="fill-blue-500 mt-1"/>
                <h className="text-black font-sans font-semibold">Payments & Invoicing </h>
                <span className="text-blue-600 text-xs font-sans font-extrabold h-2 mt-1">New</span>
                </div>
                <p className=" text-gray-500 w-full lg:w-48 text-start">Send invoices and collect payments in seconds.</p>
            </a>
           </div>
        </div>
        </div>
      </div>

            {/* Help dropdown*/}

            <div className="flex">
      <div className="group relative cursor-pointer py-2">
        <div className="flex ">
        <a href="#"
            className="menu-hover block lg:inline-block text-black hover:text-black px-3 py-3  text-sm font-sans font-bold">Help
            </a>
        <span className="mt-4 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span> 
        </div>

        <div className="invisible l absolute z-50 h-screen lg:h-auto  lg:w-auto bg-gray-100 lg:py-1 px-4 text-gray-800 shadow-xl rounded-3xl group-hover:visible group-hover:animate-slideinright lg:group-hover:animate-none">
            <div className="flex gap-6 lg:justify-around flex-col-reverse lg:flex-row m-5 w-96 lg:w-full">
                <div>
                <h1 className=" text-start text-base font-sans text-blue-600  font-extrabold mt-1">Need help?</h1>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-3 text-sm">
                    <a className=" flex gap-1 mt-1 text-start lg:text-base font-sans font-bold text-blue-600">
                     <span>Contact Us </span>
                     <span className="hidden lg:block">|</span>
                    
                    </a>

                    <a className=" flex items-start flex-row gap-1 mt-1">
                    <SlEnvolope  className=" text-blue-600 mt-1 h-4"/>
                    <span className="text-black font-sans font-sm font-semibold">support@roofr.com</span>
                    </a>
                    <a className="flex items-start flex-row gap-1 mt-1">
                    <span className="text-blue-600 mt-1"><FiPhoneCall /></span>
                    <span className="text-black font-sans font-sm font-semibold">1(844)995-4087</span>
                       
                    </a>
                </div>
            </div>
       <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mt-2">
       <a class="block border-b border-gray-100 py-1 font-semibold rounded-2xl hover:bg-gray-200 md:mx-2">
                <h1 className=" text-black font-sans font-sm font-bold flex gap-1" >
                <span className="text-blue-600 mt-1"><FaRegFileAlt /></span>
                <span>Help Articles</span>
                
                </h1>
                <p className="lg:w-44 w-full text-gray-500 text-start">Step by step articles on how to use roofr</p>
                </a>
    
                <a class="block border-b border-gray-100 rounded-2xl py-1 font-semibold text-gray-500 hover:bg-gray-200 md:mx-2">
                   <h1 className=" text-black font-sans font-sm font-bold flex gap-1">
                   <FaQ  className=" fill-blue-600 mt-1"/>
                    <span>FAQs</span>
                   </h1>
                   <p className="lg:w-44 w-full text-start">Quick answers to all your most common question</p>
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 rounded-2xl hover:bg-gray-200 md:mx-2">
                    <h1 className="flex gap-1">
                    <PiStarThin  className=" fill-blue-600 mt-1"/>
                        <span className="text-black font-sans font-sm font-bold" >Reviews</span>
                        </h1>
                    <p className="lg:w-48 w-full text-start">find out why thousands of roofers trust Roofr</p>
                </a>
                    </div>

                        <div className="flex flex-col lg:flex-row gap-3 ">
                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 rounded-2xl hover:bg-gray-200 md:mx-2">
                    <h1 className="flex gap-1">
                       <FiAward  className=" text-blue-600 mt-1" />
                        <span className="text-black font-sans font-sm font-bold" >Case Studies</span>
                        </h1>
                    <p className="lg:w-40 w-full text-start">Success stories you'll want to hear about</p>
                </a>
    
                <a class="my-2 block border-b  border-gray-100 py-1 font-semibold rounded-2xl text-gray-500 hover:bg-gray-200 md:mx-2">
                    <h1 className="flex gap-1">
                    <IoVideocamOutline className=" text-blue-600 mt-1"/>
                       <span className="text-black font-sans font-sm font-bold"> Masterclasses</span>
                        </h1>
                    <p className="lg:w-44 w-full text-start">Watch how to become a Roofr master.</p>
                </a>
                        </div>

                <a class="my-2 block border-b text-center  border-gray-100 py-1 font-semibold underline decoration-solid text-blue-600  md:mx-2">
                   View All
                </a>
        </div>
        </div>
      </div>

        {/* Grow dropdown */}
        <div className="flex">
      <div className="group relative cursor-pointer py-2">
        <div className="flex ">
        <a href="#"
            className="menu-hover block lg:inline-block  text-black hover:text-black px-3 py-3  text-sm font-sans font-bold">Grow
            </a>
        <span className="mt-4 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </span> 
        </div>

        <div className="invisible  absolute  lg:rounded-3xl  z-50  bg-gray-100 p-10 text-gray-800 shadow-xl group-hover:visible group-hover:animate-slideinright lg:group-hover:animate-none">
        <div className="flex flex-col lg:flex-row justify-between">
        <div className=" w-1/3 p-2">
       <a class=" block border-b border-gray-100 rounded-2xl hover:bg-gray-200 md:mx-2">
                <h1 className="flex">
                <IoMicOutline  className="mt-1 text-blue-600 "/>
                   <span className="text-black font-sans font-bold">Podcast</span>
                    </h1>
                <p className=" w-80 lg:w-40 text-gray-500 font-semibold text-start">Tune in for the best roofing & business tips.</p>
            </a>
       </div>

           <div className=" 1/3 p-2">
           <a class="block border-b border-gray-100 round-2xl font-semibold text-gray-500 hover:bg-gray-200 md:mx-2">
                <h1 className="flex gap-1">
                <IoVideocamOutline className=" text-blue-600 mt-1"/>
                    <span  className="text-black font-sans font-bold">Masterclasses</span>
                    </h1>
                <p className=" w-80 lg:w-40 text-start">Watch how to become a Rooft master.</p>
            </a>
           </div>

           <div className=" w-1/3 p-2">
           <a class="block border-b border-gray-100 font-semibold rounded-2xl text-gray-500 hover:bg-gray-200 md:mx-2">
                <h1 className="flex gap-1">
                <FiCalendar className=" text-blue-600 mt-1"/>
                   <span className="text-black font-sans font-bold"> Events</span>
                    </h1>
                <p className="w-96 lg:w-48 text-start">View all our upcoming events and tradeshows</p>
            </a>
           </div>

          </div>

          <div className="flex flex-col lg:flex-row justify-between">
          <div className=" w-1/3 p-2">
         <a class=" my-2 block border-b rounded-2xl border-gray-100 py-1 font-semibold text-gray-500 hover:bg-gray-200 md:mx-2">
                <h1 className="flex gap-1">
                <ImBlog className=" text-blue-600 mt-1" />
                   <span className="text-black font-sans font-bold"> Blog & Press</span>
                    </h1>
                <p className=" w-96 lg:w-40 text-start">Find the lastest insights in roofing and business.</p>
            </a>
         </div>

          <div className=" w-1/3 p-2">
          <a class="my-2 py-1 rounded-2xl   block border-b border-gray-100 font-semibold text-gray-500 hover:bg-gray-200 md:mx-2">
                <h1 className="flex gap-1">
                <SlLayers className=" text-blue-600 mt-1" />
                   <span className="text-black font-sans font-bold"> Product Updates</span>
                    </h1>
                <p className="lg:w-40 w-96  text-start">New features available in Roofr</p>
            </a>
            </div>

            <div className=" w-1/3 p-2">
            <a class=" my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               <h1 className="flex gap-1">
               <IoShieldOutline className=" text-blue-600 mt-1"/>
                <span className="text-black font-sans font-bold">Roofr of the Month</span>
                </h1>
               <p className="lg:w-48 w-96 text-start">Top performing Roofrs making a difference.</p>
            </a>
            </div>
          </div>

          <a class="my-2 block border-b text-center  border-gray-100 py-1 font-semibold underline decoration-solid text-blue-600  md:mx-2">
                   View All
                </a>

          <div>
            <h1 className=" text-base font-sans text-blue-600  font-extrabold text-start">Want to grow with us?</h1>
            <div className=" flex  flex-col lg:flex-row">

            <div className=" w-1/3 p-2">
            <a class=" my-2 block border-b border-gray-100 py-1 font-semibold  text-gray-500 hover:text-black md:mx-2">
               <h1 className="flex gap-1">
               <AiOutlineUsergroupDelete  className=" text-blue-600 mt-1"/>
                <span className="text-black font-sans font-bold">Partners</span>
                </h1>
               <p className="w-80 lg:w-48 text-start">Take a look at all of our awesome partners</p>
            </a>
            </div>

            <div className=" w-1/3 p-2">
            <a class=" my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               <h1 className="flex gap-1">
               <BsHddStack className=" text-blue-600 mt-1"/>
                <span className="text-black font-sans font-bold">Careers</span>
                </h1>
               <p className="lg:w-48  w-80 text-start">Want to join the team? Explore Our open roles</p>
            </a>
            </div>

            <div className=" w-1/3 p-2">
            <a class=" my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               <h1 className="flex gap-1">
               <FaAsymmetrik className=" text-blue-600 mt-1"/>
                <span className="text-black font-sans font-bold">About Us</span>
                </h1>
               <p className="lg:w-48 w-80 text-start">Our story and what we stand for at Roofr</p>
            </a>
            </div>
            </div>
          </div>

        </div>

       
        </div>
      </div>


          <button  className="cursor-pointer mt-2 w-full lg:w-24 h-10 text-center border-blue-500 rounded-1xl active:shadow-blue-300 hover:shadow duration-300 transition font-sans">
          <a href="#"
            className="block lg:inline-block text-start text-black  hover:text-black px-3 py-3  lg:border-none text-sm font-sans font-bold ">Pricing
        </a>
          </button>
        


        <div className="flex flex-col lg:flex-row gap-3 lg:mr-0  mr-5 mt-3 lg:ml-80">
    
    <button
  className="cursor-pointer text-start w-full lg:w-24 h-9 lg:text-center border-b-2 lg:border-none mb-5 lg:mb-0  border-gray-100 lg:rounded-2xl active:shadow-blue-100 hover:shadow duration-300 transition font-sans"
>
<a href="#" className=" text-blue-500 font-sans font-bold  text-1xl">Book a call
    </a>
</button>
    <button
  className="cursor-pointer mt-1 w-full  lg:w-24 h-8 text-center  border-2 border-blue-500 rounded-3xl active:shadow-none  hover:shadow duration-300 transition "
>
  <a
    className="text-sm font-sans text-blue-500 font-semibold hover:text-blue-500  transition duration-300 "
  >
    Log in
  </a>
</button>

<button class=" mt-1 bg-blue-500 hover:bg-gradient-to-tr from-blue-500 from-0% via-blue via-100% to-blue-900 to-95% text-white font-sans font-semibold  h-8 text-sm py-1 px-5 rounded-full ">
  Start for free
</button>


    </div>
    </div>
    

</nav>
    )
}

export default Navbar;