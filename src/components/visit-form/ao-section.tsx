import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IVisitFormSection } from '../../interfaces';

const AOSection = ({ form, onChange }: IVisitFormSection): JSX.Element => {
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={1}>
                    <Typography variant="h4">AO</Typography>
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.sinus}
                        fullWidth
                        label="Синусы"
                        name="sinus"
                        autoComplete="sinus"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">мм</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.peresheek}
                        fullWidth
                        label="Перешеек"
                        name="peresheek"
                        autoComplete="peresheek"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">мм</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.vosh}
                        fullWidth
                        label="Восх"
                        name="vosh"
                        autoComplete="vosh"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">мм</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.duga}
                        fullWidth
                        label="Дуга"
                        name="duga"
                        autoComplete="duga"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">мм</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.nish}
                        fullWidth
                        label="Нисх"
                        name="nish"
                        autoComplete="nish"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">мм</InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.sinusToBSA}
                        fullWidth
                        label="Индекс"
                        name="sinusToBSA"
                        autoComplete="sinusToBSA"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    мм/м<sub>2</sub>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.peresheekToBSA}
                        fullWidth
                        label="Индекс"
                        name="peresheekToBSA"
                        autoComplete="peresheekToBSA"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    мм/м<sub>2</sub>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.voshToBSA}
                        fullWidth
                        label="Индекс"
                        name="voshToBSA"
                        autoComplete="voshToBSA"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    мм/м<sub>2</sub>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs></Grid>
                <Grid item xs></Grid>
            </Grid>
        </>
    );
};

export default AOSection;
