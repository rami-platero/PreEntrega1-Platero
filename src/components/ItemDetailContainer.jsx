import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import SingleProduct from "./SingleProduct";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  useEffect(() => {
    handleProduct();
  }, [id]);

  return (
    <main className="pt-[100px] mx-auto max-w-[1400px]">
      {product ? (
        <SingleProduct product={product} />
      ) : (
        <h1 className="font-medium text-2xl">Item does not exist</h1>
      )}
    </main>
  );
};

export default ItemDetailContainer;
