import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
const singleproduct = () => {
  return (
    <div>
      <div className="content mt-72 sm:mt-32 sm:ml-10 lg:mt-20  lg:ml-0 lg:p-20  ">
        <div className="img flex  flex-col lg:flex-row bg-white">
          <Image src="/Image (1).png" alt="" width={500} height={200} />
          <h1 className=" text-3xl absolute mt-32 lg:mt-0 top-[400px] sm:top-[200px] lg:top-[430px]  lg:right-[420px] font-bold ">
            Library Stool{" "}
          </h1>

          <p className="absolute  mt-[115px] lg:mt-0 lg:right-[525px] sm:top-[250px] top-[450px] lg:top-[470px] text-3xl font-bold ">
            Chair
          </p>
          <div className="usd mt-[200px] sm:mt-[200px] lg:mt-28 w-32 lg:w-auto lg:ml-[80px] ">
            <p className="p-2 rounded-[50px] bg-[#029fae] h-9 text-white">
              $20.00 USD
            </p>
          </div>

          <div className=" absolute lg:right-[200px] w-[400px] h-80 mt-[500px] lg:mt-44 pt-5 border-t-2 border-gray-100">
            <p className="text-sm pr-5 lg:p-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis doloremque ea dolorum, voluptas ullam repellat
              perferendis asperiores autem
            </p>
            <button className="w-[130px] ml-0 lg:ml-0 rounded-md mt-6 flex justify-center items-center h-[36px] bg-[#029fae] text-white">
              <RiShoppingCart2Line />
              <Link href="/cart" className="ml-1">
                Add To Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* add stuff */}

      <div>
        <div className="img lg:ml-20  sm:h-[1000px]  mt-20  lg:mt-14 w-[1140px] h-[2200px]  lg:h-[400px] bg-white">
          <div className="testing">
            <div className="flash  flex flex-col lg:flex-row lg:mt-10">
              <h1 className="text-4xl  lg:text-2xl  flex items-center mt-[0px] sm:mt-[50px]   lg:mt-5 font-bold">
                Featured Product
              </h1>
              <button className="font-bold underline flex invisible lg:visible  flex-col items-center lg:ml-[850px]">
                View All
              </button>
              <div className="flex ml-6">
                <div className="upper flex gap-x-2"></div>
              </div>
            </div>
          </div>
          <div className="product h-[2000px] lg:h-[10px] mt-[00px] lg:mt-10 ">
            <div className="one grid  sm:grid-cols-2 sm:w-[500px] md:w-[700px] lg:w-auto sm:ml-10  lg:ml-0 lg:grid-cols-5 gap-10 bg-white w-[1160px] h-[250px] ">
              <div className="img flex-col ">
                <Image
                  src="/Image (9).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content flex">
                  <h1 className="text-sm  w-32">Library Stool Chair </h1>
                  <p className="font-bold ml-16">$99</p>
                </div>
              </div>
              {/* add two */}
              <div className="img flex-col ">
                <Image
                  src="/Image.png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content flex">
                  <h1 className="text-sm  w-32">Library Stool Chair </h1>
                  <p className="font-bold ml-16">$99</p>
                </div>
              </div>

              {/* add three */}
              <div className="img flex-col ">
                <Image
                  src="/Image (7).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content flex">
                  <h1 className="text-sm w-32">Library Stool Chair </h1>
                  <p className="font-bold ml-16">$99</p>
                </div>
              </div>
              {/* add four */}
              <div className="img flex-col ">
                <Image
                  src="/Image (2).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content flex">
                  <h1 className="text-sm w-32">Library Stool Chair </h1>
                  <p className="font-bold ml-16">$99</p>
                </div>
              </div>
              {/* add five */}

              <div className="img flex-col ">
                <Image
                  src="/Image (8).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content flex">
                  <h1 className="text-sm w-32">Library Stool Chair </h1>
                  <p className="font-bold ml-16">$99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default singleproduct;
