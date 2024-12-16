import Image from "next/image";

const Product = () => {
  return (
    <div>
      <div className="img lg:ml-20  mt-20  lg:mt-14 w-[1140px]  bg-white">
        <div className="testing">
          <div className="zapier w-[1107px] h-[100px] bg-white  ">
            <div className="company grid sm:grid-cols-2     md:grid-cols-3 gap-20 sm:w-[320px] md:w-[375px]  lg:w-auto lg:grid-cols-6  lg:flex-row  lg:justify-between lg:items-center">
              <Image
                src="/Logo.png"
                alt=""
                height={87}
                width={85}
                className="cursor-pointer hover:h-[90px] hover:w-[90px]"
              />
              <Image
                src="/Logo (1).png"
                alt=""
                height={109}
                width={107}
                className="cursor-pointer hover:h-[111px] hover:w-[110px]"
              />
              <Image
                src="/Logo (2).png"
                alt=""
                height={139}
                width={135}
                className="cursor-pointer hover:h-[141px] hover:w-[137px]"
              />
              <Image
                src="/Logo (3).png"
                alt=""
                height={101}
                width={98}
                className="cursor-pointer hover:h-[102px] hover:w-[100px]"
              />
              <Image
                src="/Logo (5).png"
                alt=""
                height={115}
                width={113}
                className="cursor-pointer hover:h-[117px] hover:w-[115px]"
              />
              <Image
                src="/Logo (6).png"
                alt=""
                height={84}
                width={87}
                className="cursor-pointer hover:h-[86px] hover:w-[89px]"
              />
            </div>
          </div>
          <div className="flash  flex flex-col lg:flex-row mt-80 lg:mt-20">
            <h1 className="text-3xl lg:text-2xl mt-[660px] sm:mt-[230px] md:mt-[0px] lg:mt-0 font-bold">
              Featured Product
            </h1>

            <div className="flex ml-6">
              <div className="upper flex gap-x-2"></div>
            </div>
          </div>
        </div>
        <div className="product mt-[100px] lg:mt-5 ">
          <div className="one grid lg:grid-cols-4 md:grid-cols-2 md:w-[50%] lg:w-full flex-col lg:flex-row gap-8 mr-0 bg-white w-[#350px] h-[#250] ">
            <div className="img flex-col ">
              <Image
                src="/Image.png"
                alt="product"
                width={312}
                height={312}
                className="w-[460px] md:w-[300px] lg:w-[312]"
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-[410px] md:left-[240px] lg:left-56 bg-[#029fae] rounded-md">
                  <Image
                    src="/Buy 2.png"
                    alt=""
                    height={44}
                    width={44}
                    className=""
                  />
                </div>
                <p className="font-bold">20$</p>
              </div>
            </div>
            {/* add two */}
            <div className="img flex-col ">
              <Image
                src="/Image (1).png"
                alt="product"
                width={312}
                height={312}
                className="w-[460px] md:w-[300px] lg:w-[312]"
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-[410px] md:left-[238px] lg:left-56 bg-[#029fae] rounded-md">
                  <Image
                    src="/Buy 2.png"
                    alt=""
                    height={44}
                    width={44}
                    className=""
                  />
                </div>
                <p className="font-bold">
                  20${" "}
                  <span className="line-through text-[#9a9caa] font-medium">
                    $20
                  </span>{" "}
                </p>
              </div>
            </div>
            {/* add three */}
            <div className="img flex-col ">
              <Image
                src="/Image (2).png"
                alt="product"
                width={312}
                height={312}
                className="w-[460px]"
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-[410px] md:left-[238px] lg:left-56 bg-[#029fae] rounded-md">
                  <Image
                    src="/Buy 2.png"
                    alt=""
                    height={44}
                    width={44}
                    className=""
                  />
                </div>
                <p className="font-bold">20$</p>
              </div>
            </div>
            {/* add four */}
            <div className="img flex-col ">
              <Image
                src="/Image (3).png"
                alt="product"
                width={312}
                height={312}
                className="w-[460px]"
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-[410px] md:left-[238px] lg:left-56 bg-[#029fae] rounded-md">
                  <Image
                    src="/Buy 2.png"
                    alt=""
                    height={44}
                    width={44}
                    className=""
                  />
                </div>
                <p className="font-bold">20$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
