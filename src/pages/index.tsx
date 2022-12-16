import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./home";
import LoginRouter from "./login";

const AppRouter = () => {
    // This is main router
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<LoginRouter/>}/>
        </Routes>
    );
};

export default AppRouter;
