import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const MyPagination = ({
  totalPages,
  totalPagesToDisplay = 5,
  currentPage,
  setCurrentPage,
}) => {
  const showLeftEllipsis = currentPage - 1 > totalPagesToDisplay / 2;
  const showRightEllipsis =
    totalPages - currentPage + 1 > totalPagesToDisplay / 2;
  const getPageNumbers = () => {
    if (totalPages <= totalPagesToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const half = Math.floor(totalPagesToDisplay / 2);
      let start = currentPage - half;
      let end = currentPage + half;
      if (start < 1) {
        start = 1;
        end = totalPagesToDisplay;
      }
      if (end > totalPages) {
        start = totalPages - totalPagesToDisplay + 1;
        end = totalPages;
      }
      if (showLeftEllipsis) {
        start++;
      }
      if (showRightEllipsis) {
        end--;
      }
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  };

  const renderPaginationItems = () => {
    const pageNumbers = getPageNumbers();
    return pageNumbers.map((pageNumber) => (
      <PaginationItem key={pageNumber}>
        <PaginationLink
          className={`cursor-pointer ${pageNumber === currentPage && "bg-primary text-primary-foreground"}`}
          isActive={pageNumber === currentPage}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <Pagination className="my-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {renderPaginationItems()}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};