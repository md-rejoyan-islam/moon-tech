import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

const BrandSearch = ({ table }) => {
  return (
    <Input
      placeholder="Filter name..."
      value={table?.getColumn("name")?.getFilterValue() ?? ""}
      onChange={(event) =>
        table?.getColumn("name")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
};
BrandSearch.propTypes = {
  table: PropTypes.object,
};

export default BrandSearch;
