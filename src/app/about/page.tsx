import Image from "next/image"
import { CiCircleCheck } from "react-icons/ci";
const about = () => {
      return(
          <div>
                          <div className="content mt-32 lg:mt-32">
                                     <div className=" flex flex-col md:flex-row lg:flex-row justify-center p-10 gap-5">
                                        <div className="img cursor-pointer">
                                       <Image src="/text Block.png" alt="" width={472}  height={478}   
                                        className="w-[672px] sm:w-[350px]  md:w-[450px] md:h-[280px]  lg:w-[672px] lg:h-[478px] rounded-lg"
                                       />
                                       </div>
                                       <div className="img cursor-pointer ">
                                       <Image src="/Image.png" alt="" width={472}  height={378}   
                                         className="w-[672px] sm:w-[350px] sm:h-[250px]  md:w-[450px] md:h-[280px] h-[350px] lg:w-[672px] lg:h-[478px] "
                                       />
                                       </div>
                                      </div>

                                          <div className="whatmakes flex-col flex  lg:flex-row justify-center ">
                                            <h1 className="font-semibold sm:ml-10 flex md:justify-center  text-2xl ml-5 ">What Makes Our Brand Differernt</h1>
                                          </div>
                                           <div className="grid mt-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-4 p-7 sm:p-2 md:grid-cols-2  gap-16 ">
                                          <div className="div-text  bg-[#f9f9f9] p-8 w-[309px] h-[244px]">
                                                       <Image src="/Delivery.png" alt="Delivery Image"  
                                                        width={24}
                                                        height={24}
                                                       />
                                                       <div className="text-[#007580]">
                                                        <p className="font-medium mt-2 text-xl">Next day as a Standard</p>
                                                         <div className="div mt-2 text-sm">
                                                        <p>Order before 3pm and get </p>
                                                        <p> your order the next day as</p>
                                                        <p>standard</p>
                                                         </div>  
                                                       </div>
                                                 </div>
                                                   {/* add one */}
                                                   
                                                         <div className="div-text  bg-[#f9f9f9] p-8 w-[309px]  h-[244px]">
                                                   <Image src="/Checkmark--outline.png" alt="Delivery Image"  
                                                        width={24}
                                                        height={24}
                                                       />
                                                       <div className="text-[#007580]">
                                                        <p className="font-medium mt-2 text-xl">Made by true artisans</p>
                                                         <div className="div mt-2 text-sm">
                                                        <p>Handmade and crafted goods </p>
                                                        <p className="">made with real passion and</p>
                                                        <p>craftmenship</p>
                                                         </div>  
                                                       </div>
                                                 </div>
                                              
 
                                                  {/* add two */}
                                                   
                                                  <div className="div-text bg-[#f9f9f9] p-8 w-[309px] h-[244px]">
                                                       <Image src="/Purchase.png" alt="Delivery Image"  
                                                        width={24}
                                                        height={24}
                                                       />
                                                       <div className="text-[#007580]">
                                                        <p className="font-medium mt-2 text-xl">Unbeatble prices</p>
                                                         <div className="div mt-2 text-sm">
                                                        <p>For Our materials and </p>
                                                        <p>Quality you Will find better </p>
                                                        <p>Prices anywhere</p>
                                                         </div>  
                                                       </div>
                                                 </div>
                                                 
                                                 
                                                   {/* add three  */}
                                                   <div className="div-text bg-[#f9f9f9] p-8 w-[309px] lg:w-[270px] h-[244px]">
                                                       <Image src="/Sprout.png" alt="Delivery Image"  
                                                        width={24}
                                                        height={24}
                                                       />
                                                       <div className="text-[#007580]">
                                                        <p className="font-medium mt-2 text-xl">Recycled Packaging</p>
                                                         <div className="div mt-2 text-sm">
                                                        <p>we use 100% recycled to</p>
                                                        <p>ensure our footprint is more</p>
                                                        <p>mangebale</p>
                                                         </div>  
                                                       </div>
                                                 </div>
                                        </div>    
                                          <div className="ourproduct mt-20">
                                              <h1 className="text-2xl ml-10 font-bold">Our Popular Product</h1>
                                                 <div className="img flex flex-col lg:flex-row gap-10 ml-2 lg:ml-10 mt-5">
                                                    <div className="firsr-img">
                                                      <Image src="/Product Card.png" alt="" height={630} width={462}  />
                                                      </div>
                                                      <div className="grid sm:grid-cols-2 lg:grid-cols-2 ">
                                                      <div className="sec-img">
                                                      <Image src="/Parent.png" alt="" height={285} width={265}
                                                      className="h-[275px] "
                                                       />
                                                       <p className="text-[#2A254B] mt-1">The Dandy Chair</p>
                                                       <p className="text-[#2A254B] mt-1">$99.00</p>
                                                       </div>
                                                       <div className="third-img ">
                                                        <Image src="/photo.png" alt="" height={285} width={305}
                                                        className="h-[275px]"
                                                      />
                                                      <p className="text-[#2A254B] mt-1">The Dandy Chair</p>
                                                      <p className="text-[#2A254B] mt-1">$99.00</p>
                                                      </div>
                                                      </div>
                                                 </div>
                                          </div>

                          </div>
          </div>
      )
}
export default about