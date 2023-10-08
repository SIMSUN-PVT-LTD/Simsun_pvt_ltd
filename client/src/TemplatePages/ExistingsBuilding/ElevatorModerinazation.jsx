import React from "react";

import BackgroundImg from "../../assets/img/lift2.jpg";


const ElevatorModerinazation = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
      {/* section 1 */}
      <div className=" w-full h-[40rem] ">
        <div className="relative min-h-screen">
          <img
            src={BackgroundImg}
            alt="Your Image"
            className="w-full sm:max-h-[40rem] h-[45rem]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center ">
            <div className=" p-4 rounded-lg shadow-lg text-center bg-transparent  flex justify-center items-center  md:-translate-y-44 sm:-translate-y-24 -translate-y-10">
              <div className=" mx-28 w-[45%]">
                <h1 className="sm:text-6xl font-semibold text-white w-[65%] text-4xl text-left">
                  Elevator modernization
                </h1>
                <p className="text-3xl text-white text-left ">
                  Boost your elevator’s reliability, eco-efficiency, comfort,
                  and appearance – and bring it in line with the latest safety,
                  aesthetics, eco-efficiency, performance and accessibility
                  standards – with our modernization solutions for all needs and
                  budgets.
                </p>
              </div>
              <div className="w-[55%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* section 1 end */}
      <div className="mt-1 flex justify-center items-center sm:mx-10 flex-col">
        {/* section 2 start  */}
        <div className="flex flex-col lg:flex-row">
      {/* Left Half: Ten Input Elements */}

      <div className="w-full lg:w-1/2 p-4">
        <form>
        
        </form>
      </div>

      {/* Right Half: Four Input Elements, One Textarea, and One Checkbox */}
      <div className="w-full lg:w-1/2 p-4">
        <form>
          

          <div className="mb-4">
            <label htmlFor="textarea1" className="block font-medium text-gray-700">Textarea:</label>
            <textarea id="textarea1" name="textarea1" className="w-full px-3 py-2 border rounded-lg"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="checkbox1" className="block font-medium text-gray-700">
              <input type="checkbox" id="checkbox1" name="checkbox1" className="mr-2" /> Checkbox
            </label>
          </div>
        </form>
      </div>
          </div>
        {/* section 2 end here */}

        {/* section 3 */}
        <div className="sm:mt-7 mt-32 flex flex-col  items-center w-full">
          <div className="text-left flex  w-4/5">
            <h2 className="text-5xl  w-full ">Elevator modernization with SIMSUN</h2>
          </div>
          <div className="flex flex-wrap justify-center mt-4  w-full bg-red-500 ">
            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h1 className="text-3xl text-blue-700">Become a customer</h1>

              <button className="text-blue-500 border border-blue-500  px-8 py-2 rounded-lg hover:scale-105 flex justify-center items-center text-2xl cursor-pointer">
                Contact an Expert
              </button>
            </div>
            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h1 className="text-3xl text-blue-700">Ask us for a quote</h1>

              <button className="text-blue-500 border border-blue-500  px-8 py-2 rounded-lg hover:scale-105 flex justify-center items-center text-2xl cursor-pointer">
                Request a quote
              </button>
            </div>
            <div className="bg-white  p-4 rounded-lg shadow-lg sm:w-[30%] w-[90%] flex  items-center justify-around flex-col min-h-[15rem] font-semibold">
              <h1 className="text-3xl text-blue-700">
                Report a service need or incident
              </h1>

              <button className="text-blue-500 border border-blue-500  px-8 py-2 rounded-lg hover:scale-105 flex justify-center items-center text-2xl cursor-pointer">
                Get in touch
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ElevatorModerinazation;
