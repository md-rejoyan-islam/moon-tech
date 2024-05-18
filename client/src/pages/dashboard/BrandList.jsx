import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandData } from "./Data";
import brandColumns from "./table/column/Brand.column";
import { Tables } from "./table/Table";

const BrandList = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadProductData());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="w-full  mx-auto   bg-white  border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Products</div>
        </header>

        <div className="overflow-x-auto p-3">
          <Tables
            data={brandData}
            columns={brandColumns}
            from={"brand_table"}
          />
        </div>
      </div>
    </div>
    // </section>
  );
};

export default BrandList;
