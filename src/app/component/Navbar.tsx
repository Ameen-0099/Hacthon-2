import { FaChevronDown } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* First Section: Free Shipping Banner */}
      <div className="content bg-[#272343] max-w-full  flex flex-col lg:flex-row text-white h-28 lg:h-[45px] lg:py-8 items-center px-0 lg:px-20">
        <div className="check invisible lg:visible">
          <FaCheck size={16} />
        </div>
        <h1 className="text-center lg:text-left pr-2 lg:pr-0  w-72 mr-8 lg:mr-0 lg:ml-2">
          Free Shipping On All Orders Over $50
        </h1>
        <div className="nav-text text-white w-72 lg:ml-[500px]  flex lg:justify-end  items-center   lg:flex-row lg:  mt-2 lg:mt-0">
          <p className="ml-[0px]">Eng</p>
          <FaChevronDown />
          <Link href="/faq" className="ml-4 mr-3">
            Faqs
          </Link>
          <CiCircleAlert />
          <p className="">Need Help</p>
        </div>
      </div>

      {/* Second Section: Logo and Cart */}
      <div className="comfort">
        <div className="nav-two max-w-full flex  lg:flex-row  justfy-between items-center lg:mt-7 bg-[#f0f2f3] h-20 lg:h-20 px-4 lg:px-20">
          <div className="flex items-center ">
            <Image src="/Logo Icon.png" alt="Logo" width={40} height={40} />
            <p className="lg:pl-2">Comfortly</p>
          </div>
          <div className="cart flex items-center ml-44 sm:ml-96 md:ml-[500px] bg-white lg:flex-row lg:ml-auto lg:bg-white w-[120px] p-2 mt-3 lg:mt-0">
            <Image src="/Buy 2.png" alt="Cart Icon" width={22} height={22} />
            <p className="ml-2">Cart</p>
            <Image
              src="/No.png"
              alt="Cart Icon"
              width={25}
              height={20}
              className="ml-2 lg:ml-4"
            />
          </div>
        </div>
      </div>

      {/* Third Section: Navigation Links */}
      <div className="nav-3 mt-10 h-20 lg:border-b-2 border-[#f0f2f3]    ">
        <div className="content  flex flex-col sm:flex-row md:flex-row lg:flex-row gap-5  text-base  items-center  lg:ml-20   ">
          <button id="stickyButton" className="sticky-button"></button>
          <Link
            href="/"
            className=" hover:text-[#007580]"
          >
            Home
          </Link>
          <Link href="#" className="hover:text-[#007580]">
            Shop
          </Link>
          <Link href="/AllProduct" className="hover:text-[#007580]">
            Product
          </Link>
          <Link href="#" className="hover:text-[#007580]">
            Pages
          </Link>
          <Link href="/about" className="hover:text-[#007580]">
            About
          </Link>
          <Link
            href="/contactus"
            className="text-base invisible sm:visible lg:visible lg:text-lg cursor-pointer  sm:ml-20 md:ml-44 lg:ml-[550px] hover:text-[#007580]"
          >
            Contact: (808)555-0111
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


