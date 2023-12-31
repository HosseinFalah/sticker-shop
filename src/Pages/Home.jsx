import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container'
import PaginateItems from "../Common/PaginateItems";
import { Header } from "../Components";

const Home = () => {
    const { items: products, status } = useSelector(state => state.products);

    return (
        <Container maxWidth="lg">
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>
            <Header/>
            <PaginateItems 
                products={products} 
                productsPerPage={6} 
                status={status} />
        </Container>
    )
}

export default Home