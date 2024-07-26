import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button 
        disabled={currentPage === 1} 
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        disabled={currentPage === totalPages} 
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
