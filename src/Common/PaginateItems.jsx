import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import { Products } from "../Components";

const PaginateItems = ({ productsPerPage, products, isLoading, isSuccess }) => {
    const [startIndex, setStartIndex ] = useState(0);

    // productsPerPage count product in page
    const endOffset = startIndex + productsPerPage;

    // return [] product paginate in page
    const currentProducts = products.slice(startIndex, endOffset);

    // count buttons in page
    const pageCount = Math.ceil(products.length / productsPerPage);

    const handlePageClick = e => {
        const btnSelected = +e.target.innerText;
        // count productsPerPage example 6 in page * select button example 2 
        const newIndex = btnSelected * productsPerPage;
        setStartIndex(newIndex);

        // scroll Top
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <Products 
                currentProducts={currentProducts} 
                isLoading={isLoading} 
                isSuccess={isSuccess} 
            />
            <Pagination 
                sx={{ margin: '3rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                count={pageCount} 
                page={startIndex} 
                onChange={handlePageClick} 
                variant="outlined" 
                color="secondary"
                shape="rounded"
            />
        </>
    )
}

export default PaginateItems