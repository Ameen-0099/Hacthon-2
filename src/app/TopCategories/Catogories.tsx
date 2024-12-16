import Image from "next/image";

const Catogories = () => {
  return (
    <div>
      <div className="img  lg:ml-20  mt-[100px] lg:mt-32 w-[1140px]  bg-white mb-52">
        <div className="testing">
          <div className="flash  flex flex-col lg:flex-row mt-10">
            <h1 className="text-3xl lg:text-2xl mt-5 font-bold">
              Top Categories
            </h1>

            <div className="flex ml-6">
              <div className="upper flex gap-x-2"></div>
            </div>
          </div>
        </div>
        <div className="product mt-10 ">
          <div className="one grid md:grid-cols-2  md:w-[500px] lg:w-full lg:grid-cols-3 gap-8 mr-10 bg-white  ">
            <div className="relative">
              <div className="img flex-col ">
                <Image
                  src="/Image (5).png"
                  alt="product"
                  width={424}
                  height={424}
                  className="w-[460px]  lg:w-[424px]"
                />
              </div>
              <div className="absolute mt-[67px] lg:mt-0 md:invisible lg:visible   top-[337px] lg:top-[303px] w-[460px]  lg:w-[358px]  rounded-b-md  h-[55px]  bg-[#000000B2]"></div>
              <p className="absolute top-[405px] lg:top-[305px] left-5 text-white text-lg">
                Wing Chair
              </p>
              <p className="absolute  top-[420px] lg:top-[320px] left-5 text-gray-200 pt-1 text-sm mt-1">
                3&#44;584 Products{" "}
              </p>
            </div>
            <div className="relative">
              <div className="img flex-col ">
                <Image
                  src="/Image (6).png"
                  alt="product"
                  width={424}
                  height={424}
                  className="w-[460px]"
                />
              </div>
              <div className="absolute mt-[67px] lg:mt-0 md:invisible lg:visible top-[337px]  lg:top-[303px] w-[460px] lg:w-[358px]  rounded-b-lg  h-[55px]  bg-[#000000B2]"></div>
              <p className="absolute top-[400px] lg:top-[305px] left-5 text-white text-lg">
                Wooden Chair
              </p>
              <p className="absolute top-[420px] lg:top-[320px] md:invisible lg:visible left-5 text-gray-200 pt-1 text-sm mt-1">
                157 Products{" "}
              </p>
            </div>
            <div className="relative">
              <div className="img flex-col ">
                <Image
                  src="/Image (7).png"
                  alt="product"
                  width={424}
                  height={424}
                  className="w-[460px]"
                />
              </div>
              <div className="absolute mt-[67px] lg:mt-0  md:invisible lg:visible top-[337px] lg:top-[303px] w-[460px] lg:w-[358px] rounded-b-lg h-[55px]  bg-[#000000B2]"></div>
              <p className="absolute  top-[405px] lg:top-[305px] left-5 text-white text-lg">
                Desk Chair
              </p>
              <p className="absolute top-[420px] lg:top-[320px] md:invisible lg:visible left-5 text-gray-200 pt-1 text-sm mt-1">
                154 Products{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catogories;
