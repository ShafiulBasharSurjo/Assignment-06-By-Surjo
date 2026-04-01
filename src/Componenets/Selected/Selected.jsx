import React from "react";
import cartimg from "../../../assets/products/shopping-cart.png";
import { FaUserSecret } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Selected = ({ cartItems = [], setCartItems }) => {
  const handleDelete = (item) => {
    const filtered = cartItems.filter((c) => c.id !== item.id);
    setCartItems(filtered);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <img src={cartimg} alt="Cart" className="w-10 h-10 text-gray-400" />
        <p className="text-gray-400 text-sm">Your cart is empty</p>
      </div>
    );
  }
  return (
    <div className="space-y-5 p-5">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 justify-between p-10 rounded-br-2xl border"
        >
          <div className="flex items-center gap-6">
            <img className="h-15 w-auto" src={item.img} alt="" />
            <div>
              <h2 className="flex items-center gap-2 font-semibold text-xl">
                <FaUserSecret />
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
          <button
            className="btn text-red-500"
            onClick={() => handleDelete(item)}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};
export default Selected;
