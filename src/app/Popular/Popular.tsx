import Image from "next/image";
const Popular = () => {
  return (
    <div>
      <div className="flash  flex flex-col lg:flex-row  lg:ml-32 bg-white "></div>
      <div className="img-div ml-10 lg:ml-14  flex flex-col lg:flex-row gap-3 p-10 pl-5">
        <div className="img w-[300px]   lg:w-[500px]  bg-white lg:h-[500px] text-center relative ">
          <h1 className="text-black  absolute -rotate-90 right-[280px] text-xl top-[210px] h-32 whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </h1>
          <Image
            src="/item-category 1.png"
            alt=""
            width={500}
            height={800}
            className="w-[290px] h-[243px] lg:w-[500px] lg:h-[500px]"
          />
        </div>

        <div className="sec-playstation relative bg-purple-300  w-[290px] h-[243px] ">
          <Image
            src="/Img(4).png"
            alt=""
            width={290}
            height={200}
            className="h-[243px] "
          />
          <div className="sec-playstation relative bg-purple-300  w-[290px] h-[243px] mt-3">
            <Image
              src="/Image (1).png"
              alt=""
              width={290}
              height={200}
              className="h-[243px] "
            />
          </div>
        </div>
        {/* add */}
        <div className="sec-playstation relative bg-purple-300  w-[290px] h-[243px] ">
          <Image
            src="/Image.png"
            alt=""
            width={290}
            height={200}
            className="h-[243px] "
          />
          <div className="sec-playstation relative bg-purple-300  w-[290px] h-[243px] mt-3">
            <Image
              src="/Image (6).png"
              alt=""
              width={290}
              height={200}
              className="h-[243px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popular;
