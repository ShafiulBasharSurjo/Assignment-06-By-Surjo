import React, { useState } from "react";
import Selected from "../Selected/Selected";
import NotSelected from "../NotSelected/NotSelected";

const Tools = ({ dataPromise }) => {
  const [selectedItems, setSelectedItems] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <section className="bg-gray-100 py-20 px-[5%]">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-syne text-[#1a1a1a]">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 mt-2 text-center justify-center max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="items-center justify-center flex mb-10">
          <button
            onClick={() => setSelectedItems(false)}
            className={`btn rounded-r-none rounded-l-2xl ${selectedItems === false ? "bg-[#6107ec] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedItems(true)}
            className={`btn rounded-l-none rounded-r-2xl  ${selectedItems === true ? "bg-[#6107ec] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Cart (cartItems.length)
          </button>
        </div>

        {selectedItems === true ? (
          <Selected cartItems={cartItems} setCartItems={setCartItems} />
        ) : (
          <NotSelected dataPromise={dataPromise} setCartItems={setCartItems} />
        )}
      </section>
    </>
  );
};

export default Tools;
