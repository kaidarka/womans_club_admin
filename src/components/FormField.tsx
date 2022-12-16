import React from 'react';
import {ErrorMessage} from "formik";

interface IProps {
    label: string;
    labelFor: string;
    children: JSX.Element;
}
const FormField = (props: IProps) => {
    const { label, labelFor, children } = props;
    return (
        <div className='formField'>
            <label className='formField__label' htmlFor={labelFor}>
                {label}
            </label>
            {children}
            <ErrorMessage className='formField__error' name={labelFor} />
        </div>
    );
};

export default FormField;
