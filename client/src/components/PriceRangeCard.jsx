import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

function PriceRangeCard() {
  return (
    <div className="price-range  bg-slate-100 rounded-md">
      <h3 className="px-4 py-2">Price Range</h3>
      <hr />
      <div className="mt-4 p-4 h-24 ">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
    </div>
  );
}

export default PriceRangeCard;
