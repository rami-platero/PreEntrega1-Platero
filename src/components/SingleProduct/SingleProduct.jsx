import React, { useContext, useEffect, useMemo } from "react";
import { formatPrice } from "../../lib/utils";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const formattedPrice = formatPrice(product.price);

  const { cart } = useContext(cartContext);

  const isInCart = cart.some((p) => {
    return p.product.id === product.id;
  });

  const isOutOfStock = product.stock < 0;

  return (
    <div className="p-4 flex flex-wrap justify-between items-center w-full gap-4">
      <div className="w-full max-w-lg m-auto object-cover">
        <img
          className="object-cover aspect-square w-full"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col max-md:items-center w-full max-w-[700px] m-auto">
        <h3>{product.stock} available</h3>
        <h1 className="font-bold text-3xl">{product.name}</h1>
        <h2 className="text-base font-normal">{product.category.name}</h2>
        <h3 className="text-base font-semibold">{formattedPrice}</h3>
        <p className="mt-4 text-sm opacity-85">{product.description}</p>
        {isInCart ? (
          <Link
            className="bg-indigo-700 bg-opacity-50 border-2 border-indigo-500 w-fit px-8 py-2 mt-4 rounded-2xl text-sm  text-zinc-200 font-semibold hover:bg-indigo-500 transition ease-in-out"
            to={"/cart"}
          >
            Go To Cart
          </Link>
        ) : null}
        {!isInCart && !isOutOfStock ? (
          <ItemQuantitySelector product={product} />
        ) : null}
      </div>
    </div>
  );
};

export default SingleProduct;
