import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import SingleProduct from "./SingleProduct";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProduct = async () => {
    try {
      setIsLoading(true);
      const data = await getProductById(id);
      setProduct(data);
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
