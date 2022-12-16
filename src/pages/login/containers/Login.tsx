import React from 'react';
import {LoginComponent} from "../components/Login";
import {useLogin} from "../../../hooks/useLogin";

const LoginContainer = () => {
    const login = useLogin();
    const loginAction = (values: { userName: string; password: string; }, setSubmitting: (value: boolean) => void) => {
        console.log(values);
        login(values.userName, values.password).then(() => setSubmitting(false));
    }
    return (
        <LoginComponent action={loginAction}/>
    );
};

export default LoginContainer;
