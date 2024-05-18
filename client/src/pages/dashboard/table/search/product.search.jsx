import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

const ProductSearch = ({ table }) => {
  return (
    <Input
      placeholder="Filter emails..."
      value={table?.getColumn("email")?.getFilterValue() ?? ""}
      onChange={(event) =>
        table?.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};

ProductSearch.propTypes = {
  table: PropTypes.object,
};

export default ProductSearch;
