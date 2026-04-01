import React from "react";
import cartimg from "../../../assets/products/shopping-cart.png";
import { FaUserSecret } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Selected = ({ cartItems = [], setCartItems }) => {
  const handleDelete = (item) => {
    toast.error(`${item.title} removed from cart!`);
    const filtered = cartItems.filter((c) => c.id !== item.id);
    setCartItems(filtered);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const handleClearout = () => {
    toast.success(`Checkout successful! Total: $${totalPrice.toFixed(2)}`);
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="items-center justify-center flex flex-col min-h-[60vh]">
        <img src={cartimg} alt="Cart" className="w-10 h-10 text-gray-400" />
        <p className="text-gray-400 text-sm">Your cart is empty</p>
      </div>
    );
  }
  return (
    <>
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
              className="btn text-red-400 text-xs border-red-400 hover:bg-red-400 hover:text-white rounded-full"
              onClick={() => handleDelete(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-5">
        <p className="text-lg font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div>
        <button
          onClick={handleClearout}
          class="w-full btn btn-primary rounded-2xl"
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};
export default Selected;
