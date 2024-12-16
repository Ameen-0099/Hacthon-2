import { FaPlus } from "react-icons/fa6";
const faq = () => {
  return (
    <div>
      <div className="contetn flex flex-col lg:flex-row justify-center mt-60 sm:mt-10 lg:mt-10">
        <h1 className="text-3xl font-bold p-5 lg:p-0 ">Question Looks Here</h1>
      </div>
      <div className="lorem flex p-3 lg:p-0 flex-col lg:flex-row justify-center text-[#4f4f4f] mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="container flex-col lg:flex-row flex justify-center">
        <div className="check ">
          <div className="questions   bg-[#f7f7f7] w-[480px] h-[170px]  mt-10 rounded-md">
            <div className="title flex items-center p-2">
              <h1 className="font-bold">What types Of Chairs you Want?</h1>
              <div className="icon ml-[170px] p-2">
                <FaPlus />
              </div>
            </div>
            <div className="">
              <p className="p-2 text-sm text-[#4f4f4f]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quam provident maiores aliquam voluptate repudiandae. cupiditate
                quam provident maiores?
              </p>
            </div>
          </div>

          {/* left side sec  */}
          <div className="check">
            <div className="questions bg-[#f7f7f7] w-[480px] h-[170px]  mt-10 rounded-md">
              <div className="title flex items-center p-3">
                <h1 className=" font-bold">
                  Do your chair come with warranty?
                </h1>
                <div className="icon  ml-[150px] p-2 ">
                  <FaPlus />
                </div>
              </div>
              <div className="">
                <p className="p-2 text-sm text-[#4f4f4f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  quam provident maiores aliquam voluptate repudiandae.
                  cupiditate quam provident maiores?
                </p>
              </div>
            </div>
          </div>
          {/* left side three */}
          <div className="check">
            <div className="questions bg-[#f7f7f7] w-[480px] h-[170px] mt-10 rounded-md">
              <div className="title flex items-center p-2">
                <h1 className="font-bold">
                  Can I try a Chair before purchasing?
                </h1>
                <div className="icon flex ml-[144px] p-2 ">
                  <FaPlus />
                </div>
              </div>
              <div className="">
                <p className="p-2 text-sm text-[#4f4f4f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  quam provident maiores aliquam voluptate repudiandae.
                  cupiditate quam provident maiores?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* add righ first */}
        <div className="check">
          <div className="questions bg-[#f7f7f7]  w-[480px] h-[170px] lg:ml-24 mt-10 rounded-md">
            <div className="title flex items-center p-2">
              <h1 className="font-bold">How can we get in touch with you</h1>
              <div className="icon ml-[170px] p-2">
                <FaPlus />
              </div>
            </div>

            <div className="">
              <p className="p-2 text-sm text-[#4f4f4f]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quam provident maiores aliquam voluptate repudiandae. cupiditate
                quam provident maiores?
              </p>
            </div>
          </div>
          {/* add right side first */}
          <div className="check">
            <div className="questions bg-[#f7f7f7] w-[480px] h-[170px] lg:ml-24 mt-10 rounded-md">
              <div className="title flex items-center p-2">
                <h1 className="font-bold">What Will be deliverd? And When?</h1>
                <div className="icon ml-[160px] p-2">
                  <FaPlus />
                </div>
              </div>
              <div className="">
                <p className="p-2 text-sm text-[#4f4f4f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  quam provident maiores aliquam voluptate repudiandae.
                  cupiditate quam provident maiores?
                </p>
              </div>
            </div>
          </div>
          {/* add right side three */}

          <div className="check ">
            <div className="questions bg-[#f7f7f7] w-[480px] h-[170px] lg:ml-24 mt-10 rounded-md">
              <div className="title flex items-center p-2">
                <h1 className="font-bold">
                  How do I clean and maintain my Comforty Chair?{" "}
                </h1>
                <div className="icon ml-[50px] p-2">
                  <FaPlus />
                </div>
              </div>
              <div className="">
                <p className="p-2 text-sm text-[#4f4f4f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                  quam provident maiores aliquam voluptate repudiandae.
                  cupiditate quam provident maiores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default faq;
