import React, { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { cartContext } from "../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(cartContext);

  const [isLoading, setisLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleOrder = async (userData) => {
    setisLoading(true);

    try {
      if (!cart.length) {
        throw new Error("You haven't added any items to your cart.");
      }

      const orderPayload = {
        buyer: {
          ...userData,
        },
        items: cart,
        total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const ids = cart.map((item) => {
        return item.product.id;
      });
      const productsRef = collection(db, "products");
      const res = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = res;

      docs.forEach((doc) => {
        const productDb = doc.data();
        const productInCart = cart.find((item) => {
          return item.product.id === doc.id;
        });

        if (productDb.stock < productInCart.quantity) {
          throw new Error(
            "Error while creating order: You have items in your cart that are out of stock."
          );
        }

        batch.update(doc.ref, { stock: productDb.stock - productInCart.quantity });
      });

      await batch.commit();
      const ordersRef = collection(db, "orders");
      const newOrder = await addDoc(ordersRef, orderPayload);

      setOrderId(newOrder.id);
      clearCart();
    } catch (error) {
      console.log(error);
      if ("message" in error) {
        toast.error(error.message);
      }
    } finally {
      setisLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-[1400px] pt-[100px] p-4 flex flex-col items-center gap-4">
      <h1>Checkout</h1>
      {orderId ? (
        <h2>Your order has been generated: {orderId}</h2>
      ) : (
        <CheckoutForm onSubmit={handleOrder} isLoading={isLoading} />
      )}
    </main>
  );
};

export default Checkout;
