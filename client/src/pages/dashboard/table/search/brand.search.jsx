import { Input } from "@/components/ui/input";

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

export default BrandSearch;
