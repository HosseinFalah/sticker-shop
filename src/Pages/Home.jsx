import { Helmet } from "react-helmet";
import { Header } from "../Components";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>
            <Header/>
        </>
    )
}

export default Home