import React from 'react';
import {ErrorMessage} from "formik";

interface IProps {
    labelFor: string;
    children: JSX.Element;
}
const FormField = (props: IProps) => {
    const { labelFor, children } = props;
    return (
        <>
            {children}
            <ErrorMessage name={labelFor} />
        </>
    );
};

export default FormField;
