import React from 'react';
import {Formik} from "formik";
import {object, string} from "yup";
import FormField from "../../../components/FormField";
import {Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography} from "@mui/material";

interface IProps {
    action: (values: { userName: string; password: string; }, setSubmitting: (value: boolean) => void) => void
}

const validationSchema = object().shape({
    userName: string().required('Поле должно быть заполнено'),
    password: string().required('Поле должно быть заполнено'),
})

const theme = createTheme();
export const LoginComponent = (props: IProps) => {
    const { action } = props;
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Вход
                    </Typography>
                <Formik
                    initialValues={{
                        userName: '',
                        password: '',
                    }}
                    onSubmit={(values, { setSubmitting }) => action(values, setSubmitting)}
                    validationSchema={validationSchema}
                >
                    {({handleSubmit}) => (
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <FormField labelFor='userName'>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Имя пользователя"
                                    name="userName"
                                    autoComplete="userName"
                                    autoFocus
                                />
                            </FormField>
                            <FormField labelFor='password'>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormField>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Войти
                            </Button>
                        </Box>
                    )}
                </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
