import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="content mt-52 sm:mt-10  lg:mt-0  lg:ml-20">
        <div className="best-furntiure pl-2 relative bg-[#f0f2f3] flex flex-col  lg:flex-row lg:w-[1080px] h-auto lg:h-[584px]">
          <Image
            src="/Product Image.png"
            alt=""
            width={434}
            height={584}
            className="sm:ml-64 md:ml-[300px] sm:mt-[300px] lg:ml-[600px]  mt-[400px] p-10 lg:p-0 lg:mt-20 pb-5  h-96 w-96 sm:w-[400px] md:h-[400px] md:w-[434px]  lg:w-[434px] lg:h-[500px]"
          />
          <p className="absolute  top-[160px] lg:left-14">WELCOME TO CHAIRY</p>
          <h1 className="absolute top-[200px] text-4xl lg:text-5xl font-bold lg:left-14">
            Best Furniture{" "}
          </h1>
          <br />
          <h1 className="absolute  top-[250px] text-4xl lg:text-5xl font-bold lg:left-14">
            {" "}
            Collection Four Your{" "}
          </h1>
          <h1 className="absolute top-[300px] text-4xl lg:text-5xl font-bold lg:left-14">
            Interior.
          </h1>
          <div className="btn absolute">
            <div className="btn  flex items-center">
              <button
                className="w-[171px] absolute h-[52px] top-[370px] lg:left-14 text-white 
                                        bg-[#029fae] rounded-sm"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
