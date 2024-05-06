import ProductCard from "../../components/ProductCard";
import { useState, useEffect } from "react";

const TopRated = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product, index) => <ProductCard key={index} product={product} />);
  }

  useEffect(() => {
    setLoading(true);
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
