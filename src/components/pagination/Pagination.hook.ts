import { useEffect, useState } from "react";
import { IPaginationProps } from "./pagination";

export const usePaginationHook = (props: IPaginationProps) => {
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(props.total / props.size));
    }, [props.size, props.total]);

    return {
        ...props,
        pageCount,
    }
}