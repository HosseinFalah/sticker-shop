import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import { CartTable, Home, NotFound, ProductDetails } from "../Pages";

const router = createBrowserRouter([
    { 
        path: "/",
        element: <RootLayout/>, 
        errorElement: <NotFound/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/cart', element: <CartTable/>},
            {path: '/product/:productId', element: <ProductDetails/>}
        ]
    }
])

export default router;