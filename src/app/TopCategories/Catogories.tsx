import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Catogories = () => {
  return (
    <div>
      <div className="img ml-10 lg:ml-20  mt-[100px] lg:mt-32 w-[1140px]  bg-white mb-52">
        <div className="testing">
          <div className="flash  flex flex-col lg:flex-row mt-10">
         
            <h1 className="text-2xl mt-5 font-bold">Top Categories</h1>
           
            <div className="flex ml-6">
              <div className="upper flex gap-x-2"></div>
            </div>
          </div>

          
        </div>
        <div className="product mt-10 ">
          <div className="one flex flex-col lg:flex-row gap-8 mr-10 bg-white w-[#350px] h-[#250] ">
            <div className="relative">
            <div className="img flex-col ">
              <Image
                src="/Image (5).png"
                alt="product"
                width={424}
                height={424}
                className=""
              />
              
               </div>
                <div className="absolute mt-[67px] lg:mt-0  top-[291px] w-[423px] lg:w-[345px]  rounded-sm h-[65px]  bg-[#000000B2]"></div>
                <p className="absolute top-[360px] lg:top-[295px] left-5 text-white text-lg">Wing Chair</p>
               <p className="absolute  top-[380px] lg:top-[315px] left-5 text-gray-200 pt-1 text-sm mt-1">3&#44;584 Products </p> 
         </div>  
         <div className="relative">
            <div className="img flex-col ">
              <Image
                src="/Image (6).png"
                alt="product"
                width={424}
                height={424}
                className=""
              />
              
               </div>
                <div className="absolute mt-[67px] lg:mt-0  top-[291px] w-[423px] lg:w-[345px]  rounded-sm h-[65px]  bg-[#000000B2]"></div>
                <p className="absolute top-[360px] lg:top-[295px] left-5 text-white text-lg">Wooden Chair</p>
               <p className="absolute top-[380px] lg:top-[315px]  left-5 text-gray-200 pt-1 text-sm mt-1">157 Products </p> 
         </div>  
         <div className="relative">
            <div className="img flex-col ">
              <Image
                src="/Image (7).png"
                alt="product"
                width={424}
                height={424}
                className=""
              />
              
               </div>
                <div className="absolute mt-[67px] lg:mt-0  top-[291px] w-[423px] lg:w-[345px] rounded-sm h-[65px]  bg-[#000000B2]"></div>
                <p className="absolute  top-[360px] lg:top-[295px] left-5 text-white text-lg">Desk Chair</p>
               <p className="absolute top-[380px] lg:top-[315px]  left-5 text-gray-200 pt-1 text-sm mt-1">154 Products </p> 
         </div>  
               
            
          
            </div>
        </div>
      </div>
             
    </div>
  );
};
export default Catogories;
