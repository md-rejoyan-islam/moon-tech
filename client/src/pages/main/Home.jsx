import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import BrandSection from "../../components/BrandSection";
import SortingSection from "../../components/SortingSection";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const Home = () => {
  // const {
  //   state: { products, loading, error },
  // } = useProducts();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { products, setProducts } = useSelector((state) => state.products);

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
    content = products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  }

  return (
    <div className="  mx-auto mb-10 mt-5 container ">
      <BrandSection />
      <div className="flex gap-4 my-4  justify-center">
        <Sidebar />
        <div>
          <SortingSection />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 max-w-7xl gap-4 mt-3">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
