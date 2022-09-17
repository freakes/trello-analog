import React from "react";
import MainPage from "../pages/MainPage.jsx";
import About from "../pages/About.jsx";

export const routes = [
    {path: '/', component: <MainPage/>, exact: true},
    {path: '/about', component: <About/>, exact: true},
]