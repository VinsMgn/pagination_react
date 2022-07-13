/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactPaginate from 'react-paginate';
import { usePaginationHook } from './Pagination.hook';

export interface IPaginationProps {
    total: number; // Nombre total d'éléments
    size: number; // Nombre d'éléments par page
    offset: number; // Curseur dans les résultats (ex. 10 éléments/page + page 3 => offset = 20) 
    callback: (offset: number) => void;
}

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
    const h = usePaginationHook(props);
    console.log('callback', h.callback);
    
    return (
        <nav className='fr-pagination'>
            <ReactPaginate
                initialPage={1}
                pageClassName='fr-pagination__link fr-pagination__link--lg-label'
                pageLinkClassName='fr-pagination__link'
                previousClassName='fr-pagination__link fr-pagination__link--lg-label'
                nextClassName='fr-pagination__link fr-pagination__link--lg-label'
                nextLabel=">"
                onPageChange={h.handlePageClick}
                pageCount={h.pageCount}
                previousLabel="<"
            />
        </nav>
    )
}

export default Pagination;