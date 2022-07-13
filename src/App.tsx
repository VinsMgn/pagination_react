/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Pagination from './components/pagination/pagination';


function Items({ currentItems }: any) {
  return (
    <>
      {currentItems &&
        currentItems.map((item: any) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}


function PaginatedItems({ itemsPerPage }: any) {
  const items = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], []);
  const [currentItems, setCurrentItems] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        initialPage={1}
        pageClassName='fr-pagination__link fr-pagination__link--lg-label'
        pageLinkClassName='fr-pagination__link'
        previousClassName='fr-pagination__link fr-pagination__link--lg-label'
        nextClassName='fr-pagination__link fr-pagination__link--lg-label'
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
      />
    </>
  );
}


function App() {
  return (
    <html>
      <body>
        <div className="container">
          <PaginatedItems itemsPerPage={4} />
          {/* <Pagination total={20} size={items.length} offset={0} callback={(offset: number) => { }} /> */}
        </div>
      </body>
    </html>

  );
}

export default App;
