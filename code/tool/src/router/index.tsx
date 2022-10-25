import {RouteObject} from "react-router/dist/lib/context";
import App from "../page/main";
import AlBinHexOct from "../components/alBinHexOct";
import {Navigate} from "react-router-dom";
import ErrorBoundary from "../page/ErrorBoundary";
import AlPeriodicTableOfElements from "../components/alPeriodicTableOfElements";


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
                //进制转换
                path: "BinHexOct",
                element: <AlBinHexOct />
            },
            {
                //化学元素周期表
                path: "PeriodicTableOfElements",
                element: <AlPeriodicTableOfElements />
            },
        ]
    },
];