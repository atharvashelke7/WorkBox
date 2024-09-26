import React from "react";

const PaginationControls = ({ currentPage,totalPages,goToNextPage,goToPreviousPage,goToPage,}) => {

     
  if (totalPages < 2) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center md:p-9">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={goToPreviousPage}
        >
          Prev
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            className={`btn btn-xs sm:btn-md border-none join-item ${
              pageNumber === currentPage ? "btn-primary" : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
