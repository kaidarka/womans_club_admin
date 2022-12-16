import React from 'react';
import {LoginComponent} from "../components/Login";
import {useLogin} from "../../../hooks/useLogin";

const LoginContainer = () => {
    const login = useLogin();
    const loginAction = (values: { userName: string; password: string; }) => {
        login(values.userName, values.password)
    }
    return (
        <LoginComponent action={loginAction}/>
    );
};

export default LoginContainer;
