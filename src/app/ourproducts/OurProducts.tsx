import Image from "next/image";

const Our = () => {
  return (
    <div>
      <div className="img ml-3 lg:ml-20  mt-72 lg:mt-10  w-[1140px] h-[3500px] lg:h-[800px] bg-white  ">
        <div className="testing">
          <div className="zapier w-[1107px] h-[100px] bg-white  ">
            <div className="company bg-white  flex lg:justify-center">
              <h1 className="text-3xl font-bold">Our Products</h1>
            </div>
          </div>
          <div className="flash  flex-col lg:flex-row "></div>
        </div>
        <div className="product  ">
          <div className="one  grid sm:grid-cols-2 sm:w-[600px] lg:w-auto lg:grid-cols-4 flex-col lg:flex-row gap-8 mr-10 bg-white w-[#350px] h-[#250] ">
            <div className="img flex-col relative ">
              <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#01ad5a] rounded-[4px] absolute top-6 text-white">
                Sales
              </button>
              <Image
                src="/Image.png"
                alt="product"
                width={312}
                height={312}
                className=""
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-56 bg-[#029fae] rounded-md">
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
              {/* chechking */}
              <div className="img flex-col relative mt-20 lg:mt-10">
                <button className="w-[44px] text-sm p-1 left-3 h-[26px] rounded-[4px] bg-[#01ad5a] absolute top-6 text-white">
                  New
                </button>
                <Image
                  src="/Image (8).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content relative">
                  <h1>Library Stool Chair </h1>
                  <p className="font-bold"> </p>
                  <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
            {/* add two */}
            <div className="img flex-col relative">
              <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">
                Sales
              </button>
              <Image
                src="/Image (1).png"
                alt="product"
                width={312}
                height={312}
                className=""
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3]  rounded-md">
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
              {/* checking */}
              <div className="img flex-col relative mt-20 lg:mt-10">
                <button className="w-[44px] text-sm p-1 left-3 h-[26px] bg-[#f5813f] rounded-[4px] absolute top-6 text-white">
                  Sales
                </button>
                <Image
                  src="/Image.jpg"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content relative">
                  <h1>Library Stool Chair </h1>
                  <p className="font-bold"> </p>
                  <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
            {/* add three */}
            <div className="img flex-col ">
              <Image
                src="/Image (2).png"
                alt="product"
                width={312}
                height={312}
                className=""
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
              <div className="img flex-col mt-20 lg:mt-10">
                <Image
                  src="/Image (9).png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content relative">
                  <h1>Library Stool Chair </h1>
                  <p className="font-bold"> </p>
                  <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
            {/* add four */}
            <div className="img flex-col ">
              <Image
                src="/Image (3).png"
                alt="product"
                width={312}
                height={312}
                className=""
              />
              <div className="content relative">
                <h1>Library Stool Chair </h1>
                <p className="font-bold"> </p>
                <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
              {/* chechking */}
              <div className="img flex-col mt-20 lg:mt-10">
                <Image
                  src="/Image.png"
                  alt="product"
                  width={312}
                  height={312}
                  className=""
                />
                <div className="content relative">
                  <h1>Library Stool Chair </h1>
                  <p className="font-bold"> </p>
                  <div className="cart flex absolute top-2 left-56 bg-[#f0f2f3] rounded-md">
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
    </div>
  );
};
export default Our;
