// let heading= React.createElement("h1",{id:"heading"},"WaheguruJI!")
// let root= ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
// // console.log(React)
import './App.module.scss';

import { React, Suspense } from 'react';
import ReactDom from 'react-dom/client'
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import { StyledEngineProvider } from '@mui/material'
import { AnimatePresence } from 'framer-motion';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Experience from './components/experience';

// import './css/App.css';

const AppLayout = () => {
    return (
        <div className="bg-slate-700">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:
                    <About />
            },
            {
                path: "/about",
                element:
                    <About />
            },
            {
                path: "/skills",
                element:
                    <Skills />
            },
            {
                path: "/expeience",
                element:
                    <Experience />
            },
            {
                path: "/head",
                element:
                    <Header />
            }
        ],
        errorElement: <Error />,
    },
]);
let root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)