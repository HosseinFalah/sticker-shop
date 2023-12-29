import { Helmet } from "react-helmet";
import { Header, Products } from "../Components";
import Container from '@mui/material/Container'

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>
            <Header/>
            <Products/>
        </Container>
    )
}

export default Home