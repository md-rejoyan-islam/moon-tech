import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandData } from "./Data";
import brandColumns from "./table/column/Brand.column";
import { Tables } from "./table/Table";

const BrandList = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadProductData());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="w-full  mx-auto  ">
        <header className="px-5 pt-2 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Brands</div>
        </header>

        <div className="overflow-x-auto pt-1 p-3">
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
