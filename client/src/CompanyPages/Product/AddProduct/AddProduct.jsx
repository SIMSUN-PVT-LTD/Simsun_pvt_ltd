import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  axios  from 'axios';

const AddProduct = () => {
  const [prodName, setProdName] = useState("");
  const [prodDescp, setProdDescp] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();
  const [category, setCategory] = useState("Lift");

  const state = useSelector((state) => state.user);
  console.log(state?.userData?.isAdmin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(category)
    try {
      let formData = new FormData();
      formData.append('file',file);
      formData.append('prodName',prodName);
      formData.append('prodDescp',prodDescp);
      formData.append('price',price);
      formData.append('category',category);

      const res = await axios.post('http://127.0.0.1:5000/api/submitProduct',formData)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center p-16 w-full">
        <form className=" max-w-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 rounded-md p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase dark:text-white tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block dark:text-white uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Price (in ₹)
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 flex-col">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Product Description
            </label>
            <div className=" block ">
              <textarea
                className="w-full p-2 rounded-lg"
                cols="30"
                rows="5"
                value={prodDescp}
                onChange={(e) => setProdDescp(e.target.value)}
              ></textarea>
            </div>
            <input
              className="block mt-5 p-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ">
              <label
                className="block uppercase dark:text-white tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Category
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Lift">Lift</option>
                  <option value="Esclator">Escalator</option>
                  <option value="LiftSparePart">Lift Spare Part</option>
                  <option value="EsclatorSparePart">
                    Escalator Spare Part
                  </option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-end">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
