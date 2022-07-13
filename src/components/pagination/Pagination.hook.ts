import { useEffect, useMemo, useState } from "react";
import { IPaginationProps } from "./pagination";

export const usePaginationHook = (props: IPaginationProps) => {
    const [currentItems, setCurrentItems] = useState<number[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const items = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], []);

    useEffect(() => {
        const endOffset = props.offset + props.size;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(props.offset, endOffset));
        console.log('callback', props.callback);
        setPageCount(Math.ceil(props.total / props.size));
    }, [itemOffset, items, props]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * props.size) % props.total;
        props.callback(newOffset)
        console.log(
            `Changement of page number ${event.selected}, offset set to : ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return {
        ...props,
        handlePageClick,
        pageCount,
        currentItems,
    }
}