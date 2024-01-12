import React, { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";

const ItemQuantitySelector = ({ product }) => {
  const { addItemToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    if (product.stock <= quantity) {
      console.log("error");
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      console.log("error");
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 mt-4 items-center">
        <button
          onClick={() => {
            handleIncreaseQuantity();
          }}
          className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 rounded-full w-8 h-8 hover:bg-indigo-500 transition ease-in-out"
        >
          +
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={() => {
            handleDecreaseQuantity();
          }}
          className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 rounded-full w-8 h-8 hover:bg-indigo-500 transition ease-in-out"
        >
          -
        </button>
      </div>

      <button
        className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 w-fit px-8 py-2 mt-4 rounded-2xl text-sm  text-zinc-200 font-semibold hover:bg-indigo-500 transition ease-in-out"
        onClick={() => {
          addItemToCart(product, quantity);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
