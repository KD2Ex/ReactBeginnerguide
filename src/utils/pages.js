import {useMemo} from "react";

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

//usePagination

// export const getPagesArray = (totalPages) => {
//     let result = [];
//     for (let i = 0; i < totalPages; i++) {
//         result.push(i + 1);
//     }
//     return result;
// }

export const usePagination = (totalPages) => {

    let pages = useMemo(() => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        return result;
    }, [totalPages])

    return pages;

}


