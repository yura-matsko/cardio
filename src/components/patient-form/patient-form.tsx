import 'date-fns';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import ruLocale from 'date-fns/locale/ru';
import getTime from 'date-fns/getTime';
import Grid from '@material-ui/core/Grid';
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

import { addDocument, updateDocument } from '../../api';
import { IPatient, genderType } from '../../interfaces';
import { calculateBodySurfaceArea } from '../../math';
import { DateFormat } from '../../enums';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    }),
);

type PatientFormProps = {
    initialValue?: IPatient | null;
    editForm?: boolean;
    onEdit?: () => void;
};

const defaultForm = {
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
    bodyArea: undefined,
};

const PatientForm = ({ initialValue, editForm, onEdit }: PatientFormProps): JSX.Element => {
    const history = useHistory();
    const classes = useStyles();
    const [form, setForm] = useState<IPatient>(initialValue || defaultForm);

    const params = useParams<{ id: string } | null>();

    const readOnly = !!initialValue && !editForm;

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
            if (params?.id && onEdit) {
                await updateDocument('patients', params.id, { ...form });
                onEdit();

                return;
            }

            const id = v4();
            await addDocument('patients', { id, ...form });

            history.push(`patient/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handlePatientCreate}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.lastName}
                        fullWidth
                        label="??????????????"
                        name="lastName"
                        autoComplete="lastName"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.firstName}
                        fullWidth
                        label="??????"
                        name="firstName"
                        autoComplete="firstName"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.fatherName}
                        fullWidth
                        label="????????????????"
                        name="fatherName"
                        autoComplete="fatherName"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <FormControl margin={readOnly ? 'dense' : 'normal'} fullWidth variant="outlined">
                        <InputLabel id="select">??????</InputLabel>
                        <Select
                            value={form.gender || form.gender}
                            labelId="select"
                            disabled={readOnly}
                            onChange={handleGenderChange}
                            label="??????"
                        >
                            <MenuItem value={'m'}>??????????????</MenuItem>
                            <MenuItem value={'f'}>??????????????</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <MuiPickersUtilsProvider locale={ruLocale} utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            fullWidth
                            margin={readOnly ? 'dense' : 'normal'}
                            disabled={readOnly}
                            inputVariant="outlined"
                            label="???????? ????????????????"
                            format={DateFormat.Default}
                            value={form.birthDate || form.birthDate}
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
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.phone}
                        fullWidth
                        label="??????????????"
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
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.postalCode}
                        fullWidth
                        label="????????????"
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
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.city}
                        fullWidth
                        label="??????????"
                        name="city"
                        autoComplete="city"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.street}
                        fullWidth
                        label="??????????"
                        name="street"
                        autoComplete="street"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.houseNumber}
                        fullWidth
                        label="??????"
                        name="houseNumber"
                        autoComplete="houseNumber"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        disabled={readOnly}
                        value={form.appartment}
                        fullWidth
                        label="????????????????"
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
                        margin={readOnly ? 'dense' : 'normal'}
                        fullWidth
                        label="????????"
                        disabled={readOnly}
                        value={form.height}
                        name="height"
                        autoComplete="height"
                        type="number"
                        autoFocus
                        InputProps={{
                            endAdornment: <InputAdornment position="end">????</InputAdornment>,
                        }}
                        onBlur={handleBodyArea}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        fullWidth
                        label="??????"
                        disabled={readOnly}
                        value={form.weight}
                        name="weight"
                        autoComplete="weight"
                        type="number"
                        autoFocus
                        InputProps={{
                            endAdornment: <InputAdornment position="end">????</InputAdornment>,
                        }}
                        onBlur={handleBodyArea}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        variant="outlined"
                        margin={readOnly ? 'dense' : 'normal'}
                        fullWidth
                        label="S ??????.????????"
                        disabled={readOnly}
                        name="bodyArea"
                        autoComplete="bodyArea"
                        type="number"
                        autoFocus
                        value={form.bodyArea || form.bodyArea}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    ??<pre>2</pre>
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            {!readOnly ? (
                <Grid className={classes.button} container direction="row" justify="flex-end" alignItems="center">
                    <Button size="large" type="submit" variant="contained" color="primary">
                        ??????????????????
                    </Button>
                </Grid>
            ) : null}
        </form>
    );
};

export default PatientForm;
