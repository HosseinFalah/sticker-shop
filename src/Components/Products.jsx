import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CircularProgress from '@mui/material/CircularProgress';

import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../Api/productApi";
import ProductCard from "./ProductCard";

const Products = () => {
    const { status } = useSelector(state => state.products)
    
    const { data = [] } = useGetAllProductsQuery();

    return (
        <Box sx={{ flexGrow: 1 }}>
            {status === "pending" && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 14rem)' }}>
                <CircularProgress color="success"/>
            </Box>}
            <Box sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    {status === "success" && data?.map(product => (
                        <Grid key={product.id} xs={4}>
                            <ProductCard {...product}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Products