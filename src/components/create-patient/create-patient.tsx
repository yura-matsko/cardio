import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    }),
);

const CreatePatient = (): JSX.Element => {
    const [form, setForm] = useState<any>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { name, value },
        } = event;

        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <>
            <Container component="main" maxWidth="md">
                <Typography gutterBottom variant="h4">
                    Новый пациент
                </Typography>
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Фамилия"
                                name="lastName"
                                autoComplete="lastName"
                                autoFocus
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="Имя"
                                name="firstName"
                                autoComplete="firstName"
                                autoFocus
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="fatherName"
                                label="Отчество"
                                name="fatherName"
                                autoComplete="fatherName"
                                autoFocus
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
};

export default CreatePatient;
