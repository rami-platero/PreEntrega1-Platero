import React, { useContext } from "react";
import { formatPrice } from "../../lib/utils";
import { cartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useContext(cartContext);

  const formattedPrice = formatPrice(item.quantity * item.product.price);

  return (
    <div className="bg-black/20 p-2 flex flex-col sm:flex-row items-center justify-start gap-8 w-full">
      <img
        src={item.product.image}
        className="sm:max-w-[200px] max-w-[300px] w-full"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-base">{item.product.name}</h2>
        <h3 className="text-sm">Quantity: {item.quantity}</h3>
        <h3 className="text-sm">{formattedPrice}</h3>
      </div>
      <button
        className="ml-auto mr-8"
        onClick={() => {
          removeItemFromCart(item.product.id);
        }}
      >
        <FaTrashAlt size={"1.7rem"} className="fill-red-500" />
      </button>
    </div>
  );
};

export default CartItem;
