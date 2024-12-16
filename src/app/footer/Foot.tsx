import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { AiFillPinterest } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Foot = () => {
  return (
    <div>
      <div className="flex flex-col  lg:flex-row  mt-[700px] lg:mt-32  justify-around  h-[343px]   lg:h-[343px] border-t-2 border-gray-200 ">
        <div className="content">
          <div className="img flex lg:mt-20 ml-5 mt-5">
            <Image
              src="/Logo Icon.png"
              alt=""
              width={10}
              height={10}
              className="w-10 h-10"
            />
            <h1 className="font-bold text-xl mt-1 ml-1">Comforty</h1>
          </div>
          <div className="msg ml-5 mt-3 ">
            <p className="">Viamus tristique Odia sit amet velit semper,</p>
            <p>eu posuere turpis interdum. </p>
            <p>Cras egestas purus</p>
          </div>
          <div className="contact flex ml-5  mt-5 items-center gap-3">
            <Image src="/Group 44.png" alt="" height={38} width={38} />
            <IoLogoTwitter />
            <CiInstagram />
            <AiFillPinterest />
            <FaYoutube />
          </div>
        </div>

        <div className="support-section flex flex-col md:flex-row  md:gap-10 lg:gap-24 ">
          <div className="category  text-black mt-20 ml-5 lg:ml-0">
            <h1 className="text-[#9a9caa]">Category</h1>
            <ul>
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li className="text-[#007580] underline">Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          <div className="support  text-black mt-20 ml-5 lg:ml-0">
            <h1 className="text-[#9a9caa]">Support</h1>
            <ul>
              <li>Help & Suppor</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
          {/* add one more */}
          <div className="Newsletter  text-black mt-20 ml-2 lg:ml-0">
            <h1 className="text-[#9a9caa]">NEWSLETTER</h1>
            <div className="input flex mt-2">
              <input
                placeholder="Your email"
                className="w-[220px] outline-none border rounded-md pl-3 border-gray-300"
              ></input>
              <button className="rounded-md ml-2 w-[80px] lg:w-[127px] h-[46px] bg-[#029fae] text-white">
                Subscribe
              </button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            <p>officiis. Quisquam ad reiciendis.</p>
          </div>
        </div>
      </div>
      <div className="develop mt-[600px]   md:mt-[150px] lg:mt-[0px]  flex flex-col lg:flex-row h-[110px] items-center border-t-2 border-gray-200 ">
        <p className=" lg:ml-20">
          @ 2021-Blogy-Designed & Develop by Zakirsoft
        </p>
        <Image
          src="/visa.png"
          alt=""
          width={30}
          height={30}
          className=" lg:ml-[650px]"
        />
        <Image src="/master.png" alt="" width={30} height={30} className="" />
        <Image src="/paypal.png" alt="" width={60} height={60} className="" />
      </div>
    </div>
  );
};
export default Foot;
