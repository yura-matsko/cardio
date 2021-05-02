import 'date-fns';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import ruLocale from 'date-fns/locale/ru';
import getTime from 'date-fns/getTime';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import { addCollection } from '../../api';
import { IPatient, genderType } from '../../interfaces';
import { calculateBodySurfaceArea } from '../../math';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    }),
);

const CreatePatient = (): JSX.Element => {
    const history = useHistory();
    const classes = useStyles();
    const [form, setForm] = useState<IPatient>({
        firstName: undefined,
        lastName: undefined,
        fatherName: undefined,
        birthDate: null,
        phone: undefined,
        postalCode: undefined,
        gender: '',
        city: undefined,
        street: undefined,
        houseNumber: undefined,
        appartment: undefined,
        height: undefined,
        weight: undefined,
        bodyArea: 0,
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

    const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const {
            target: { value },
        } = event;

        setForm({
            ...form,
            gender: value as genderType,
        });
    };

    const handleDateChange = (date: Date | null) => {
        if (!date) return;

        setForm({
            ...form,
            birthDate: getTime(date),
        });
    };

    const handleBodyArea = () => {
        if (!form.weight || !form.height) return;

        setForm({
            ...form,
            bodyArea: calculateBodySurfaceArea(form.weight, form.height),
        });
    };

    const handlePatientCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const id = v4();

            await addCollection('patients', { id, ...form });

            //patient/${id}
            history.push(`/`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <Typography gutterBottom variant="h4">
                Новый пациент
            </Typography>
            <form onSubmit={handlePatientCreate}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
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
                            fullWidth
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
                            fullWidth
                            label="Отчество"
                            name="fatherName"
                            autoComplete="fatherName"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <FormControl margin="normal" fullWidth variant="outlined">
                            <InputLabel id="select">Пол</InputLabel>
                            <Select value={form.gender} labelId="select" onChange={handleGenderChange} label="Пол">
                                <MenuItem value={'m'}>Мужской</MenuItem>
                                <MenuItem value={'f'}>Женский</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider locale={ruLocale} utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                fullWidth
                                margin="normal"
                                inputVariant="outlined"
                                label="Дата рождения"
                                format="dd/MM/yyyy"
                                value={form.birthDate}
                                name="birthDate"
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Телефон"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            type="number"
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Индекс"
                            name="postalCode"
                            autoComplete="postalCode"
                            autoFocus
                            type="number"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Город"
                            name="city"
                            autoComplete="city"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Улица"
                            name="street"
                            autoComplete="street"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Дом"
                            name="houseNumber"
                            autoComplete="houseNumber"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Квартира"
                            name="appartment"
                            autoComplete="appartment"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Рост"
                            name="height"
                            autoComplete="height"
                            type="number"
                            autoFocus
                            InputProps={{
                                endAdornment: <InputAdornment position="end">См</InputAdornment>,
                            }}
                            onBlur={handleBodyArea}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Вес"
                            name="weight"
                            autoComplete="weight"
                            type="number"
                            autoFocus
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Кг</InputAdornment>,
                            }}
                            onBlur={handleBodyArea}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="S пов.тела"
                            name="bodyArea"
                            autoComplete="bodyArea"
                            type="number"
                            autoFocus
                            value={form.bodyArea}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        м<pre>2</pre>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid className={classes.button} container direction="row" justify="flex-end" alignItems="center">
                    <Button size="large" type="submit" variant="contained" color="primary">
                        Сохранить
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default CreatePatient;
