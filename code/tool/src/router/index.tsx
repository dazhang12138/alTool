import {RouteObject} from "react-router/dist/lib/context";
import App from "../page/main";
import AlBinHexOct from "../components/alBinHexOct";
import {Navigate} from "react-router-dom";
import ErrorBoundary from "../page/ErrorBoundary";


export const routers: RouteObject[] = [
    {
        path:'/',
        errorElement: <ErrorBoundary />,
        element: <Navigate to='/home' />,
    },
    {
        path:'/',
        id:'root',
        children:[
            {
                path: "home",
                element: <App />
            },
            {
                path: "BinHexOct",
                element: <AlBinHexOct />
            },
        ]
    },
];