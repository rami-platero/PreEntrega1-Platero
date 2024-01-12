import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProduct = async () => {
    try {
      setIsLoading(true);
      const docRef = doc(db, "products", id);
      const res = await getDoc(docRef);
      const data = res.data();
      setProduct({ id: res.id, ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [id]);

  return (
    <main className="pt-[100px] mx-auto max-w-[1400px]">
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading && product ? <SingleProduct product={product} /> : null}
      {!isLoading && !product ? (
        <h2 className="font-medium text-2xl">Item does not exist</h2>
      ) : null}
    </main>
  );
};

export default ItemDetailContainer;
