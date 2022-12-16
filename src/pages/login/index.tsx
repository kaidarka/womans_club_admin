import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "./containers/Login";

const LoginRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginContainer/>}/>
        </Routes>
    );
};

export default LoginRouter;
