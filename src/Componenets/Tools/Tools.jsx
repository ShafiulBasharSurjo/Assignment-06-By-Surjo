import React, { use, useState } from "react";
import Card from "../Card/Card";
import Selected from "../Selected/Selected";

const Tools = ({ dataPromise }) => {
  const allTools = use(dataPromise);
  const [selectedItems, setSelectedItems] = useState(["notcart"]);
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
            onClick={() => setSelectedItems("notcart")}
            className={`btn rounded-r-none rounded-l-2xl ${selectedItems === "notcart" ? "bg-[#6107ec] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedItems("cart")}
            className={`btn rounded-l-none rounded-r-2xl  ${selectedItems === "cart" ? "bg-[#6107ec] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Cart (0)
          </button>
        </div>

        {selectedItems === "cart" ? (
          <Selected />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {allTools.map((dataPromise) => (
              <Card key={dataPromise.id} dataPromise={dataPromise} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Tools;
