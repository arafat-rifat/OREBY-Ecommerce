import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="md:w-[49%] lg:w-[32%]">
            <Product src="assets/cap.jpg" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemSelected(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>

      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="hidden"
        nextLinkClassName="page-link"
        pageClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm"
        containerClassName="flex
        flex-wrap gap-x-3.5 gap-y-3.5 md:gap-y-0 mt-12"
        activeClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm bg-black text-white"
      />
      <p className="md:absolute md:bottom-0 md:right-0 text-[#767676] font-regular font-sm font-dm mt-2.5 md:mt-0">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
        {Items.length}
      </p>
    </>
  );
};

export default Pagination;
