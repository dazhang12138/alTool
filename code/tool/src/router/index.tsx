import {RouteObject} from "react-router/dist/lib/context";
import App from "../page/main";
import {Navigate} from "react-router-dom";
import ErrorBoundary from "../page/ErrorBoundary";
import {AlBinHexOct, AlPeriodicTableOfElements, AlDateTimeCalculator} from "../components";


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
            {
                //时间日期计算器
                path: "DateTimeCalculator",
                element: <AlDateTimeCalculator />
            },
        ]
    },
];