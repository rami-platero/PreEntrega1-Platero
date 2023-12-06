import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../api/products";
import ProductsList from "./ProductsList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);
  const { category } = useParams();

  const handleProducts = async () => {
    const getData = category ? getProductsByCategory : getProducts;

    try {
      const data = await getData(category);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProducts();
  }, [category]);

  return (
    <main className="mx-auto max-w-[1400px] pt-[100px] p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl">{greeting}</h1>
      {products ? <ProductsList products={products}/> : null}
    </main>
  );
};

export default ItemListContainer;
