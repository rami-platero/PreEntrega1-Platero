import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "./ProductsList";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ProductListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  const handleProducts = async () => {
    try {
      setIsLoading(true);
      const queryCollection = collection(db, "products");

      if (category) {
        const queryFilter = query(
          queryCollection,
          where("category", "==", category)
        );
        const res = await getDocs(queryFilter);
        setProducts(res.docs.map((p) => ({ id: p.id, ...p.data() })));
      } else {
        const res = await getDocs(queryCollection);
        setProducts(res.docs.map((p) => ({ id: p.id, ...p.data() })));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleProducts();
  }, [category]);

  return (
    <main className="mx-auto max-w-[1400px] pt-[100px] p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl">{greeting}</h1>
      {isLoading && <span>Loading...</span>}
      {!isLoading && products ? <ProductsList products={products} /> : null}
    </main>
  );
};

export default ProductListContainer;
