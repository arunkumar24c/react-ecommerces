import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaGithub,
} from "react-icons/fa";
import { BsPersonCircle, BsPaypal } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";


const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* logo icon  */}
        <div className="flex flex-col gap-7">
          <img
            className="w-32"
            src="https://ir.ebaystatic.com/cr/v/c1/ebay-logo-1-1200x630-margin.png"
            alt="#"
          />
          <p className="text-white text-sm tracking-wide">© arunkumar.com</p>
          <img
            src="https://www.paymentwall.com/uploaded/files/PW20_methods.png"
            alt="#"
            className="w-56"
          />
          {/* icon */}
          <div className="flex gap-5 text-lg text-gray-500">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* logo icon end */}
        {/* locate container */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MDA, Ruwi, Muscat-Oman</p>
            <p>Mobile Number: 98949800367</p>
            <p>Phone Number:0432-244467</p>
            <p>E-Mail: arunkumar24c@gmail.com</p>
          </div>
        </div>
        {/* locate end */}
        {/* profile */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            {/* 1st */}
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonCircle />
              </span>
              My Account
            </p>
            {/* 2nd */}
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            {/* 3rd */}
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            {/* 4th */}
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <HiLocationMarker />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        {/* profile end */}
        {/* contact support */}
        {/* form container */}
        <form
          action="https://getform.io/f/5fb9285d-5ea0-4dfe-a3ca-2a294bae3d3a"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <h2 className="font-semibold text-lg mb-2">Share your Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-100 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email id"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            let's talk
          </button>
        </form>
        {/* contact support end */}
      </div>
    </div>
  );
};

export default Footer;
