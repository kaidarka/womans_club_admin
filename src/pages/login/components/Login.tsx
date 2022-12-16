import React from 'react';
import {Field, Form, Formik} from "formik";
import {object, string} from "yup";
import FormField from "../../../components/FormField";

interface IProps {
    action: (values: { userName: string; password: string; }, setSubmitting: (value: boolean) => void) => void
}

const validationSchema = object().shape({
    userName: string().required('Поле должно быть заполнено'),
    password: string().required('Поле должно быть заполнено'),
})
export const LoginComponent = (props: IProps) => {
    const { action } = props;
    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            onSubmit={(values, { setSubmitting }) => action(values, setSubmitting)}
            validationSchema={validationSchema}
        >
            <Form>
                <FormField label='Имя пользователя' labelFor='userName'>
                    <Field id='userName' name='userName'/>
                </FormField>
                <FormField label='Пароль' labelFor='password'>
                    <Field id='password' name='password'/>
                </FormField>
                <button type='submit'>Войти</button>
            </Form>
        </Formik>
    );
};
