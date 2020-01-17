import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,  
    maxPages: number = 3  //max page to be displayed on screen i.e << 1 2 3 >>
) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);  // number of pagination number to be displayed at one time. i.e << 1 2 >>

    // ensure current page isn't out of range. Current page can be any number. << 1 2 3 4>> suppose her it can be 2.
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage: number, endPage: number;  //each << 2 3 4 6 >> has a start page and end page. in this case start page becomes 2 and endpage to 6
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

}
