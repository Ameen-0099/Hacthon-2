import Image from "next/image"

const cart = () => {
         return(
                <div>
                              <div className="bag ml-14 mt-72  lg:mt-20 flex flex-col lg:flex-row">
                                    <h1 className="text-2xl font-bold absolute left-[60px]">Bag</h1>
                                    <div className="img mt-16 flex">
                                        <Image src="/Image (1).png" alt="" height={200}  width={200}  
                                        className=""
                                        />
                                        <div className="title flex flex-col lg:flex-row">
                                              <h1 className="ml-10"> Library Stool Chair</h1>
                                              <p className="ml-10 lg:ml-60">MRP:$99</p>
                                        </div>
                                      
                                     
                                     <div className="size text-[#757575]  flex flex-col lg:flex-row">
                                     <div className="ashen absolute invisible lg:visible left-[280px] ml-3  top-[450px]">
                                         <p>Ashen Slate/Cobalt Bliss</p>
                                     </div>
                                      <p className="absolute invisible lg:visible left-[280px] ml-3  top-[480px]">Size L</p>
                                      <p className="absolute invisible lg:visible left-64 ml-36 top-[480px]">Quantity 1</p>
                                     </div>
                                      <div className="delete invisible lg:visible absolute top-[520px] left-[290px]">
                                        <Image src="/Auto Layout Horizontal.png" alt="" width={500} height={33}
                                        className="text-black"
                                        />
                                      </div>
                                     

                                    </div>
                                      <div className="summary  w-[350px] mt-10 lg:mt-0 lg:ml-24">
                                           <h1 className="text-black text-3xl">Summary</h1>
                                            <p className="mt-5">Subtotal  <span className="ml-52">$198.00</span> </p>
                                        <p className="mt-3">Estimate Delivering & Handling <span className="ml-14 w-10 ">Free</span> </p>
                                       <div className="total border-t-2 border-gray-200 mt-5">
                                         <p className="mt-2 p-1">Total   <span className="ml-60">$198.00</span>  </p>
                                       </div>
                                       <div className="btn border-t-2 p-2 text-white border-gray-200">
                                   <button className="bg-[#029fae] rounded-full w-[335px] h-[60] p-3 mt-5">Memeber Checkout</button>
                                       </div>
                                      
                                      </div>
                              </div>
                                   {/* Add sencon img */}
                                   <div className="img  mt-16 flex w-auto  ">
                                        <Image src="/Image (3).png" alt="" height={200}  width={200}  
                                        className="ml-12"
                                        />
                                        <div className="title flex flex-col">
                                              <h1 className=" ml-10"> Library Stool Chair</h1>
                                              <p className=" ml-10 lg:ml-[430px]">MRP:$99</p>
                                        </div>
                                      
                                     
                                     <div className="size text-[#757575] flex">
                                     <div className="ashen absolute left-64 ml-3 invisible  lg:visible top-[700px]">
                                         <p className="ml-5 mt-5">Ashen Slate/Cobalt Bliss</p>
                                         
                                     </div>
                                      <p className="absolute invisible lg:visible left-64 ml-8  top-[750px]">Size L</p>
                                      <p className="absolute invisible lg:visible left-64 ml-28 top-[750px]">Quantity 1</p>
                                     </div>
                                      <div className="delete absolute invisible lg:visible top-[790px] left-[285px] ">
                                        <Image src="/Auto Layout Horizontal.png" alt="" width={500} height={33}
                                        className="text-black"
                                        />
                                      </div>
                                      </div>
                                    
                                     
                               
   


                </div>
         )
}
export default cart