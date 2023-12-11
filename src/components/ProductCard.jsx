import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../lib/utils";

const ProductCard = ({ product }) => {
  const formattedPrice = formatPrice(product.price)

  return (
    <div
      className="border-solid rounded-lg bg-black bg-opacity-20 border border-zinc-500 p-4 flex flex-col"
    >
      <div className="w-full max-w-xs m-auto object-cover">
        <img
          className="object-cover aspect-square w-full"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between max-md:items-center">
        <h3 className="font-bold">{product.name}</h3>
        <h4 className="text-sm font-semibold">{formattedPrice}</h4>
        <Link to={`/item/${product.id}`} className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 w-full py-2 mt-4 rounded-2xl text-sm  text-zinc-200 font-semibold hover:bg-indigo-500 transition ease-in-out text-center">
          More details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
