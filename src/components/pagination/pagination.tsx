import React from 'react'
import ReactPaginate from 'react-paginate';
import {usePaginationHook} from './Pagination.hook';

export interface IPaginationProps {
    total: number; // Nombre total d'éléments
    size: number; // Nombre d'éléments par page
    offset: number; // Curseur dans les résultats (ex. 10 éléments/page + page 3 => offset = 20) 
    callback: (offset: any) => void;
}

const Pagination: React.FC<IPaginationProps> = (props: IPaginationProps) => {
    const h = usePaginationHook(props);
    return (
        <nav role="navigation" className="fr-pagination" aria-label="Pagination" key="nav-container">
            <ReactPaginate
                key="paginate-component"
                containerClassName="fr-pagination__list"
                pageClassName='fr-pagination__link'
                pageLinkClassName='fr-pagination__link'
                previousClassName='fr-pagination__link'
                nextClassName='fr-pagination__link'
                nextLabel=">"
                breakLabel="..."
                onPageChange={props.callback}
                pageCount={h.pageCount}
                previousLabel="<"

            />
        </nav>
    )
}

export default Pagination;