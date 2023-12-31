import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container'
import PaginateItems from "../Common/PaginateItems";
import { Header } from "../Components";
import { useGetProductsQuery } from "../Api/productApi";

const Home = () => {
    const { 
        data: products = [],
        isLoading,
        isSuccess,
    } = useGetProductsQuery();

    return (
        <Container maxWidth="lg">
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>
            <Header/>
            <PaginateItems 
                products={products} 
                productsPerPage={6} 
                isLoading={isLoading}
                isSuccess={isSuccess} />
        </Container>
    )
}

export default Home