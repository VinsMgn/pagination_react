/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo, useState} from 'react';
import './App.css';
import Pagination from "./components/pagination/pagination";

function App() {
    const items = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], []);
    const itemPerPage = 4;
    const [itemOffset, setItemOffset] = useState(0);
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <html>
        <body>
        <div className="container">
            <Pagination total={items.length} size={itemPerPage} offset={itemOffset} callback={handlePageClick}/>
        </div>
        </body>
        </html>

    );
}

export default App;
