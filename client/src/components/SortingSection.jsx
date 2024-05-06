import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdFilterList } from "react-icons/md";
import Accordion from "./Accordion";
import PriceRangeCard from "./PriceRangeCard";
function SortingSection() {
  return (
    <div className="bg-slate-100 rounded-md py-3 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold hidden lg:block">All Laptop</h2>
        <Sheet className="lg:hidden">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="lg:hidden flex text-[12px] p-1 h-fit justify-center items-center gap-2 bg-violet-100 rounded-sm "
            >
              <MdFilterList />
              <span>Filter</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="overflow-scroll">
            <div className="space-y-2 mt-4">
              <PriceRangeCard />
              <div className="accordtion-part ">
                <Accordion title="Availability">
                  <div className="flex flex-col gap-1 justify-start p-4">
                    <label>
                      <input type="checkbox" /> &nbsp; In Stock
                    </label>
                    <label>
                      <input type="checkbox" /> &nbsp; Pre Order
                    </label>
                    <label>
                      <input type="checkbox" /> &nbsp; Up Coming
                    </label>
                  </div>
                </Accordion>
              </div>
              <div className="brand-part ">
                <Accordion title="Brand">
                  <div className="flex flex-col gap-1 justify-start p-4">
                    <label>
                      <input type="checkbox" /> &nbsp; HP
                    </label>
                    <label>
                      <input type="checkbox" /> &nbsp; Dell
                    </label>
                    <label>
                      <input type="checkbox" /> &nbsp; Lenovo
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
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex gap-3 text-[12px]">
          <div className="hidden md:block">
            <label
              htmlFor="show"
              className="text-sm font-semibold text-zinc-500"
            >
              Show: &nbsp;
            </label>
            <select
              className="border rounded-md px-2 py-1 bg-slate-200"
              id="show"
            >
              <option value="1">20</option>
              <option value="2">40</option>
              <option value="2">50</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="show"
              className="text-sm font-semibold text-zinc-500"
            >
              Sort By: &nbsp;
            </label>
            <select className="border rounded-md px-2 py-1 bg-slate-200">
              <option value="1">Default</option>
              <option value="2">Price(low &gt; high)</option>
              <option value="2">Price(high &gt; low)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingSection;
