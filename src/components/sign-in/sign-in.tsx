import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { ISignIn } from '../../interfaces';
import { auth } from '../../firebase';

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (): JSX.Element => {
    const classes = useStyles();
    const [form, setForm] = useState<ISignIn>({
        email: null,
        password: null,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { name, value },
        } = event;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const signInWithEmailAndPasswordHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = form;

        if (!email || !password) {
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setForm({
                email: null,
                password: null,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <form className={classes.form} noValidate onSubmit={signInWithEmailAndPasswordHandler}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        size="large"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default SignIn;
