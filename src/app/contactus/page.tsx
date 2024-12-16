import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import Image from "next/image";
const contact = () => {
  return (
    <div className="h-[1900px] md:h-[1500px]  lg:h-[1050px]">
      <div className="content ">
        <div className="title p-3 lg:p-0 mt-48 lg:mt-20 flex flex-col lg:flex-row justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Get In Touch With Us
          </h1>
        </div>
        <p className="capitalize p-2 lg:p-0 mt-5 text-[#9f9f9f] flex flex-col lg:flex-row justify-center">
          for more information about us product & sevice please feel free to
          drop us
        </p>
        <p className="capitalize p-2 lg:p-0 flex flex-col lg:flex-row text-[#9f9f9f] justify-center">
          an email.our staff always be there to help you out. do not hesitate!{" "}
        </p>
      </div>
      {/* add first */}
      <div className="address p-2 lg:p-0 lg:ml-32 mt-20">
        <div className="icon flex flex-col lg:flex-row">
          <FaLocationDot />
          <h1 className="font-bold ml-2">Address</h1>
          <h1 className="ml-[180px] invisible lg:visible">Your name</h1>
        </div>
        <div className="flex  w-52">
          <div className="contac text-sm">
            <p className="absolute ml-2">236 5th SE Avenue,new</p>
            <p className="absolute mt-4 ml-2">York NY10000,United</p>
            <p className="absolute mt-8 ml-2">States</p>
          </div>

          <div className="input mt-20 sm:mt-10 md:mt-0 md:ml-[70px] lg:ml-0 lg:mt-0 flex flex-col md:flex-row lg:flex-row">
            <input
              placeholder="Abc"
              className="sm:ml-32 lg:ml-[270px] mt-1 rounded-md outline-none p-4 border border-gray-300  w-72 sm:w-96 md:w-[500px] lg:w-[528.75px]"
            />
          </div>
        </div>
      </div>

      {/* add  phone */}
      <div className="address p-2 lg:p-0 lg:ml-[125px] mt-20 ">
        <div className="icon  lg:p-0 flex flex-col lg:flex-row">
          <FaPhone/>
          <h1 className="font-bold ml-2">Phone</h1>
          <h1 className=" ml-[200px] invisible lg:visible">Email Address</h1>
        </div>
        <div className="flex  flex-col lg:flex-row w-52 ">
          <div className="contac">
            <p className="absolute mt-2 ml-2">Mobile:+(84) 546-6789</p>
            <p className="absolute mt-6 ml-2">Hotline:+(84) 546-6789</p>
          </div>

          <div className="input mt-16 sm:mt-14 md:mt-0 md:ml-[70px] lg:ml-0 lg:mt-0 flex flex-col lg:flex-row">
            <input
              placeholder="Abc@def.com "
              className="sm:ml-32 md:w-[500px] lg:ml-[273px] mt-1 rounded-md outline-none p-4 border border-gray-300  w-72 sm:w-96 lg:w-[528.75px]"
            />
          </div>
        </div>
      </div>
      {/* add three */}
      <div className="address p-2 lg:p-0  lg:ml-32 mt-20 ">
        <div className="icon flex flex-col lg:flex-row">
         <IoTimerOutline size={24}/>
          <h1 className="font-bold ml-2">Working Time</h1>
          <h1 className="ml-[140px] invisible lg:visible">Subject</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="contac w-52  text-sm ">
            <p className="absolute mt-1 ml-2">Monday-friday:9:00-22:00</p>

            <p className="absolute mt-6  ml-2">Saturday-Sunday:9:00-21:00</p>
          </div>

          <div className="input flex flex-col sm:mt-14 md:mt-0 md:ml-[75px] lg:ml-0 lg:flex-row mt-20 lg:mt-0">
            <input
              placeholder="This is an Optional"
              className="sm:ml-32  lg:ml-16 mt-1 rounded-md outline-none p-4 border border-gray-300 w-72 sm:w-96 md:w-[500px] lg:w-[528.75px]"
            />
          </div>
        </div>
      </div>

      <div className="message p-2 lg:p-0  lg:ml-[400px] mt-10">
        <h1 className=" sm:ml-32  md:ml-[200px] lg:ml-0">Message</h1>
        <input
          placeholder="Hi I'd like to ask about"
          className="sm:ml-32 md:ml-[200px] lg:ml-0 border p-5 rounded-md border-gray-300 outline-none w-72 md:w-[500px] sm:w-96 lg:w-[527px] h-[120px]"
        />
      </div>
      <div className="btn p-5 lg:p-0 sm:ml-28  md:ml-[190px]  lg:ml-[400px] mt-5">
        <button className="w-[227px] h-[56px] bg-[#029fae] rounded-md text-white">
          Submit
        </button>
      </div>

      <div className="high w-full  mt-10 md:ml-0 lg:h-[220px]  bg-[#f4f4f4]">
        <div className="content flex flex-col md:flex-row lg:flex-row p-10 md:gap-5 justify-around ">
          <Image
            src="/frame 5.png"
            alt=""
            width={280}
            height={70}
            className="mt-6"
          />
          <Image
            src="/frame 19.png"
            alt=""
            width={280}
            height={70}
            className="mt-6"
          />
          <Image
            src="/frame 4.png"
            alt=""
            width={280}
            height={70}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};
export default contact;
