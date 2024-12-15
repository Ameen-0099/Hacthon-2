import Image from "next/image";
import Link from "next/link";

const allproduct = () => {
  return (
    <div>
      <div className="img ml-0 lg:ml-20   sm:mt-10 lg:mt-10  w-[1140px]  lg:w-[1140px]  h-[1200px] ">
        <div className="testing">
        <div className="zapier w-[1147px] h-[100px] bg-white  ">
                   <div className="company bg-white ml-5 sm:ml-32  flex md:ml-5 ">
                      <h1 className="text-5xl lg:text-5xl font-bold">All Products</h1> 
                   </div>
            </div>  
          <div className="flash  flex flex-col lg:flex-row ">
           
            <div className="flex ml-6">
              <div className="upper flex gap-x-2"></div>
            </div>
          </div>

         
        </div>
        <div className="product ">
          <div className="one grid ml-3  lg:ml-0 flex-col sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white sm:mr-[500px] md:mr-80 lg:mr-0   ">
           <div className="">
          <div className="img relative w-full  sm:[38%]">
            <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#01ad5a] rounded-[4px] absolute top-6 text-white">Sales</button>
              <Image
                src="/Image.png"
                alt="product"
                width={312}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px]  lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex  ml-32 sm:ml-0 md:ml-14 lg:ml-0 absolute top-2  left-56 sm:left-[226px] bg-[#029fae] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className=" w-[44px] sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
                  
                {/* chechking */}
                 {/* add second */}
                <div className="img relative mt-20 lg:mt-10">
                   <button className="w-[44px] text-sm p-1 left-3 h-[26px] rounded-[4px] bg-[#01ad5a] absolute top-6 text-white">New</button>
              <Image
                src="/Image (8).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chairr </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex ml-32 md:ml-14 lg:ml-0 absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
         </div>
           {/* add three  */}
         <div className="img flex-col relative mt-20 lg:mt-10">
            <button className="w-[44px]  text-sm p-1 left-3 h-[26px] bg-[#01ad5a] rounded-[4px] absolute top-6 text-white">Sales</button>
              <Image
                src="/Image.png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px]  lg:w-[312]"
              />
              <div className="content relative">
                 <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex ml-32 md:ml-14 lg:ml-0 absolute top-2 left-56 bg-[#029fae] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
              </div>
         </div>  
                 {/* add two */}
                 <div className="img flex-col relative">
                 <button className="w-[44px]  text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">Sales</button>     
              <Image
                src="/Image (1).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px]  md:w-[310px] h-auto lg:w-[312px]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex ml-32 md:ml-14 lg:ml-0 absolute top-2 left-56 bg-[#f0f2f3]  rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$ <span className="line-through text-[#9a9caa] font-medium">$20</span> </p>
              </div>
                {/* checking */}
                {/* add second */}
              <div className="img flex-col relative mt-20 lg:mt-10">
              <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">Sales</button>
              <Image
                src="/Image.jpg"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex ml-32 md:ml-14 lg:ml-0 absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
           {/* add three */}
         <div className="img flex-col relative mt-20 lg:mt-10">
              <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">Sales</button>
              <Image
                src="/Image (1).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex absolute ml-32 md:ml-14 lg:ml-0 top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
         </div>  
                   {/* three */}
                 {/* checking */}
               {/* add sec */}
               <div className="img flex-col ">
              <Image
                src="/Image (2).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex  ml-32 md:ml-14 lg:ml-0 absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
               {/* add sec */}
              <div className="img flex-col mt-20 lg:mt-10">
              <Image
                src="/Image (9).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px]  md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex ml-32 md:ml-14 lg:ml-0   absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
             {/* <third line horizantall   &  third img*/}  
         <div className="img flex-col relative mt-20 lg:mt-10  lg:w-auto">
              <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">Sales</button>
              <Image
                src="/Image (2).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px]  lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chairs </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex absolute ml-32 md:ml-14 lg:ml-0  top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
         </div>  
         
            {/* add four */}
            <div className="img flex-col ">
              <Image
                src="/Image (3).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex absolute ml-32 md:ml-14 lg:ml-0 top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
              
                     {/* chechking */}
              <div className="img flex-col mt-20 lg:mt-10">
              <Image
                src="/Image (2).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stool Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex absolute ml-32 md:ml-14 lg:ml-0 top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
            {/* <add three */}
            <div className="img flex-col mt-20 lg:mt-10">
              <Image
                src="/Image (3).png"
                alt="product"
                width={400}
                height={312}
                className="w-[400px] sm:w-[250px] md:w-[310px] lg:w-[312]"
              />
              <div className="content relative">
              <Link href="/singleproduct">Library Stools Chair </Link>
                 <p className="font-bold"> </p>
                  <div className="cart flex absolute sm:ml-32 md:ml-14 lg:ml-0 top-2 left-56 bg-[#f0f2f3] rounded-md">
                    <Image src="/Buy 2.png" alt="" height={44} width={44} className="sm:w-[25px]" />
                  </div>
                  <p className="font-bold">20$</p>
              </div>
         </div>  
         
           
    
         </div>  
            </div>
        </div>
      </div>
               <div className="followproduct mt-[5000px]  sm:mt-[1300px] lg:mt-20 md:mt-[1600px] h-[2950px]  sm:h-[1350px]  md:h-[1500px] lg:h-auto ">
                           <div className="products lg:p-20 lg:bg-gray-100 h-[2870px] lg:h-auto flex-wrap w-[450px] lg:w-auto ">
                               <div className="content flex lg:p-0 lg:justify-center lg:ml-0">
                                  <h1 className="lg:text-4xl  text-3xl font-semibold mt-14 ">Or SubScribe to the Newsletter</h1>
                                  </div>
                                  <div className="input  p-3 flex items-center lg:p-0">
                                  <input placeholder="Email Address" 
                                  className="outline-none w-80 bg-gray-100 lg:ml-60  mt-10 border-b-2 border-black lg:w-[650px]"
                                  ></input>
                                  <button className="w-[91px] h-[22px] mt-12 underline ml-5">SUBMIT</button>
                                  </div>
                             <div className="follow mt-10 p-3 lg:p-0 flex-col  md:w-[700px] lg:w-auto lg:ml-36">
                                   <h1 className="text-4xl  lg:text-4xl   font-bold ">Follow Products And Discount On Instagram</h1>
                                 </div>     
                                <div className="img  sm:ml-5 lg:ml-0 md:w-[700px] lg:w-auto  w-[600px]  lg:gap-0 grid sm:grid-cols-2  lg:grid-cols-6 gap-5  mt-10 ">
                                <div className="img1">
                                <Image src="/Image (1).png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px]  lg:ml-8 sm:w-[350px]"  /></div>
                                <div className="img2 ">    
                                <Image src="/Image (2).png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px]   lg:ml-4  sm:w-[350px]"  /></div>

                                 <div className="img3">   
                                <Image src="/Image (4).png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px] sm:w-[350px] "  />   
                                </div>
                                 <div className="img4"> 
                                <Image src="/Image (5).png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px]     sm:w-[350px] "  />
                                </div>
                                 <div className="img4">    
                                <Image src="/Image (6).png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px]   sm:w-[350px]    "  />
                                </div>
                                 <div className="img5">    
                                <Image src="/Image.png" alt=""  width={150} height={150} className="w-[400px] lg:w-[150px] sm:w-[350px] "  /> 
                                </div>   
                               
                                    </div> 
                                  
                                 
                           </div>
               </div>
    </div>
  );
};
export default allproduct;


