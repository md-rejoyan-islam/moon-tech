import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export function PaginationDemo({ table }) {
  const activePageIndex = table.getState().pagination.pageIndex;
  const currentPage = Number(activePageIndex) + 1;
  const totalPageArray = table.getPageOptions();
  const totalPage = Number(table.getPageCount());

  //   console.log(table.getPageOptions());
  //   console.log(table.getPageCount());
  //   console.log(table.getPageIndex());
  // get current page index
  // get current page size
  // get total page count
  // get total item count
  // get total page options

  //   console.log(table.pageOptions);
  //   // get current page index
  //   console.log(table.getState().pagination.pageIndex);

  // filter date any always show 4 item in pagination with active page
  // if current page is not the last page
  // then show ellipsis
  // else show nothing
  // if current page is not the first page
  // then show ellipsis

  // slice data to show only 4 items

  const firstPagination = currentPage > 1 ? currentPage : 1;
  const secondPagination = firstPagination + 1;
  const thirdPagination = secondPagination + 1;

  console.log([firstPagination, secondPagination, thirdPagination]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="hover:bg-[#f1f5f9] px-3 py-2 rounded-sm text-sm flex items-center gap-1 disabled:text-zinc-500"
          >
            <MdKeyboardArrowLeft className="text-lg" />
            <span>Previous</span>
          </button>
          {/* <PaginationPrevious
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            
          </PaginationPrevious> */}
        </PaginationItem>
        {/* {totalPageArray.filter((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={currentPage === page + 1}>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {page + 1}
              </button>
            </PaginationLink>
          </PaginationItem>
        ))} */}
        {
          // if current page is not the last page
          // then show ellipsis
          // else show nothing
          totalPage > 4 && currentPage - 1 > 0 && currentPage && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }

        {currentPage - 2 > 0 && (
          <PaginationItem>
            <PaginationLink>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {currentPage - 2}
              </button>
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage - 1 > 0 && (
          <PaginationItem>
            <PaginationLink>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {currentPage - 1}
              </button>
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage && (
          <PaginationItem>
            <PaginationLink isActive={currentPage}>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {currentPage}
              </button>
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 1 <= totalPage && (
          <PaginationItem>
            <PaginationLink>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {currentPage + 1}
              </button>
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage + 2 <= totalPage && (
          <PaginationItem>
            <PaginationLink>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="hover:bg-[#f1f5f9] px-3 py-2 rounded-md  text-sm  disabled:text-zinc-500  h-10 text-center  w-10 "
              >
                {currentPage + 2}
              </button>
            </PaginationLink>
          </PaginationItem>
        )}

        {
          // if current page is not the last page
          // then show ellipsis
          // else show nothing
          totalPage > 4 && currentPage + 1 <= totalPage && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }

        <PaginationItem>
          {/* <PaginationNext
            className={
              "bg-gray-200 disabled:bg-gray-200  text-gray-500 disabled:text-gray-300 disabled:cursor-pointer"
            }
            onClick={() => table.nextPage()}
            href="#"
            // disabled={!table.getCanNextPage()}
            disabled
          >
            Nextt
          </PaginationNext> */}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="hover:bg-[#f1f5f9] px-3 py-2 rounded-sm text-sm flex items-center gap-1 disabled:text-zinc-500"
          >
            Next
            <MdKeyboardArrowRight className="text-lg" />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
