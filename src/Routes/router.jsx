import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import { Home, NotFound } from "../Pages";

const router = createBrowserRouter([
    { 
        path: "/",
        element: <RootLayout/>, 
        errorElement: <NotFound/>,
        children: [
            {path: '/', element: <Home/>}
        ]
    }
])

export default router;