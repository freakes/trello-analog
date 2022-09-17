import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;