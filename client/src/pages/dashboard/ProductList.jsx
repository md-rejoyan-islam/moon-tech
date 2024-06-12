import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tables } from "./table/Table";
import { productData } from "./Data";
import productColumns from "./table/column/Product.column";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadProductData());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="w-full  mx-auto ">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Products</div>
        </header>

        <div className="overflow-x-auto p-3">
          <Tables
            data={productData}
            columns={productColumns}
            from={"product_table"}
          />
        </div>
      </div>
    </div>
    // </section>
  );
};

export default ProductList;
