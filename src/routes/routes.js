// import { lazy } from 'react';

// const HomePage = lazy(() => import(/* webpackChunkName: "Home" */ '../pages/home/HomePage'));
import {HomePage} from "../pages/home/HomePage";

export const routes = [
    {
        path: '/',
        element: <HomePage />,
        exact:false
    },
    // Aquí puedes agregar más rutas si es necesario
];



