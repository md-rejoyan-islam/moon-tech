import { useDispatch } from "react-redux";
import Accordion from "./Accordion";
import PriceRangeCard from "./PriceRangeCard";
import {
  TOGGLE_AVAILABILITY,
  TOGGLE_BRAND,
} from "@/redux/actions/filter.action";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <aside className=" hidden lg:block space-y-2 min-w-[250px]     h-[calc(100vh-60px)] sticky top-4 ">
      <PriceRangeCard />
      <div className="accordtion-part ">
        <Accordion title="Availability">
          <div className="flex flex-col gap-1 justify-start p-4">
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch({ type: TOGGLE_AVAILABILITY, payload: "in_stock" })
                }
              />
              &nbsp; In Stock
            </label>
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch({ type: TOGGLE_AVAILABILITY, payload: "pre_order" })
                }
              />
              &nbsp; Pre Order
            </label>
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch({ type: TOGGLE_AVAILABILITY, payload: "up_comming" })
                }
              />
              &nbsp; Up Coming
            </label>
          </div>
        </Accordion>
      </div>
      <div className="brand-part ">
        <Accordion title="Brand">
          <div className="flex flex-col gap-1 justify-start p-4">
            <label>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: TOGGLE_BRAND, payload: "HP" })}
              />
              &nbsp; HP
            </label>
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch({ type: TOGGLE_BRAND, payload: "Dell" })
                }
              />
              &nbsp; Dell
            </label>
            <label>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch({ type: TOGGLE_BRAND, payload: "Lenovo" })
                }
              />
              &nbsp; Lenovo
            </label>
            <label>
              <input type="checkbox" /> &nbsp; Apple
            </label>
            <label>
              <input type="checkbox" /> &nbsp; ASUS
            </label>
          </div>
        </Accordion>
      </div>
      <div className="Display-part ">
        <Accordion title="Display Type">
          <div className="flex flex-col gap-1 justify-start p-4">
            <label>
              <input type="checkbox" /> &nbsp; LED
            </label>
            <label>
              <input type="checkbox" /> &nbsp; OLED
            </label>
            <label>
              <input type="checkbox" /> &nbsp; AMOLED
            </label>
          </div>
        </Accordion>
      </div>
      <div className="ram-part ">
        <Accordion title="RAM Size">
          <div className="flex flex-col gap-1 justify-start p-4">
            <label>
              <input type="checkbox" /> &nbsp; 4 GB
            </label>
            <label>
              <input type="checkbox" /> &nbsp; 8 GB
            </label>
            <label>
              <input type="checkbox" /> &nbsp; 16 GB
            </label>
            <label>
              <input type="checkbox" /> &nbsp; 18 GB
            </label>
          </div>
        </Accordion>
      </div>
    </aside>
  );
}

export default Sidebar;
