import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

const CartPage = () => {
  const { cart } = useContext(cartContext);

  return (
    <main className="mx-auto max-w-[1400px] pt-[100px] p-4 flex flex-col items-center gap-4">
      {cart.length ? (
        <Cart cart={cart} />
      ) : (
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <Link
            to={"/"}
            className="border-white/40 border-[1px] p-2 rounded-md bg-black/25 hover:bg-white/10 transition duration-200 ease-in-out"
          >
            Start shopping
          </Link>
        </div>
      )}
    </main>
  );
};

export default CartPage;
