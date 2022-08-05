import React from "react";
import classnames from 'classnames';
import "./PaginationControls.css"
import {usePagination, DOTS} from "../../utils/hooks/usePagination";


function PaginationControls(props){
    const {
        onPageChange,
        totalPages,
        siblingPage = 1,
        currentPage,
        pageSize
    } = props

    const paginationRange = usePagination({currentPage, totalPages,pageSize,siblingPage});

    if (currentPage === 0 && paginationRange.length < 2) {
        return null;
    }
    
    const nextPage = () => {
        onPageChange(currentPage + 1);
    }

    const prevPage = () => {
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div data-testid={"pagination-controls"}
        className={classnames('pagination-container', "pagination-bar")}
      >
        <button disabled={currentPage === 1}
        data-testid={"pagination-controls-prev"}
          className={classnames('pagination-item', {
            disabled: currentPage === 1
          })}
          onClick={prevPage}
        >
          <div className="arrow left" />
        </button>
        {paginationRange.map((page, index)=> {
          if (page === DOTS) {
            return <button key={index} className="pagination-item dots"
           
            >&#8230;</button>;
          }
  
          return (
            <button key={index} data-testid={"button-number"}
              className={classnames('pagination-item', {
                selected: page === currentPage
              })}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
        <button data-testid={"pagination-controls-next"} disabled={currentPage === lastPage}
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage
          })}
          onClick={nextPage}
        >
          <div className="arrow right" />
        </button>
      </div>
    )
}

export default PaginationControls
