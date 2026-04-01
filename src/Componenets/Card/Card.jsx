import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ dataPromise, setCartItems }) => {
  const [selectedItems, setSelectedItems] = useState([false]);
  const handleAddToCart = () => {
    toast.success(`${dataPromise.title} added to cart!`);
    setCartItems((prev) => [...prev, dataPromise]);
    setSelectedItems(true);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm rounded-2xl">
        <div className="card-body">
          <div className="flex justify-between">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ">
                <img alt="Tool Image" src={dataPromise.img} />
              </div>
            </div>
            <span className="badge badge-xs badge-warning">
              {dataPromise.badge}
            </span>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold">{dataPromise.title}</h2>
            <div>{dataPromise.description}</div>
            <span className="text-2xl font-semibold">${dataPromise.price}</span>
            <span>/Mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {dataPromise.features.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6" onClick={() => setSelectedItems(true)}>
            {selectedItems === true ? (
              <button className="btn btn-success btn-block rounded-2xl">
                Added to Cart
              </button>
            ) : (
              <button
                className="btn bg-linear-to-r from-purple-600 to-blue-500 btn-block text-white rounded-2xl"
                onClick={handleAddToCart}
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
