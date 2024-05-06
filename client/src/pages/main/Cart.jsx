import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import { useSelector } from "react-redux";

const Cart = () => {
  // const {
  //   state: { cart, loading, error },
  // } = useProducts();

  const { cart, error, loading } = useSelector((state) => state.products);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product, index) => (
      <ProductCard key={index} product={product} />
    ));
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {/*{content} */}
      </div>
      <Card />
    </>
  );
};

export default Cart;
