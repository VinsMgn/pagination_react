import React, {useState} from 'react';
import './App.css';
import Pagination from "./components/pagination/pagination";

function App() {
    const itemPerPage = 4;
    const numberOfItems = 30;
    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemPerPage) % numberOfItems;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="container" data-testid='pagination-container'>
            <Pagination data-testid='pagination-component' total={numberOfItems} size={itemPerPage} offset={itemOffset}
                        callback={handlePageClick}/>
        </div>
    );
}

export default App;
