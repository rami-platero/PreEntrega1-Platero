import React, { useContext } from "react";
import { formatPrice } from "../../lib/utils";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const Cart = ({ cart }) => {
  const { total } = useContext(cartContext);

  return (
    <div className="w-full flex flex-col gap-2">
      <h1>My Cart</h1>
      <hr className="opacity-20 mb-4" />

      <div className="w-full flex justify-between gap-4 flex-wrap md:flex-nowrap">
        <div className="max-w-[800px] w-full flex flex-col gap-4">
          {cart.map((item) => {
            return <CartItem item={item} key={item.product.id} />;
          })}
        </div>

        <div className="bg-black/50 md:max-w-[300px] p-4 flex flex-col gap-2 w-full h-fit">
          <div className="flex justify-between">
            <h4>Subtotal</h4>
            <h5>{formatPrice(total)}</h5>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>{formatPrice(total)}</h3>
          </div>
          <Link
            to={"/checkout"}
            className="border-white/40 border-[1px] p-2 rounded-md bg-black/25 hover:bg-white/10 transition duration-200 ease-in-out text-sm text-center"
          >
            Checkout
          </Link>
          <Link
            to={"/"}
            className="border-white/40 border-[1px] p-2 rounded-md bg-black/25 hover:bg-white/10 transition duration-200 ease-in-out text-sm text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
