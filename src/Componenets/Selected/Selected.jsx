import React from "react";
import cartimg from "../../../assets/products/shopping-cart.png";

const Selected = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <img src={cartimg} alt="Cart" className="w-10 h-10 text-gray-400" />
      <p className="text-gray-400 text-sm">Your cart is empty</p>
    </div>
  );
};

export default Selected;
