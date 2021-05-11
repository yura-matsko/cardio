import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IVisitFormSection } from '../../interfaces';

const LPSection = ({ form, onChange }: IVisitFormSection): JSX.Element => {
    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item xs={1}>
                <Typography variant="h4">ЛП</Typography>
            </Grid>
            <Grid item xs>
                <TextField
                    variant="outlined"
                    margin="dense"
                    value={form.mrezh}
                    fullWidth
                    label="М-реж"
                    name="mrezh"
                    autoComplete="mrezh"
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
                    value={form.vrezh}
                    fullWidth
                    label="В-реж"
                    name="vrezh"
                    autoComplete="vrezh"
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
                    value={form.volume}
                    fullWidth
                    label="Обьем"
                    name="volume"
                    autoComplete="volume"
                    type="number"
                    autoFocus
                    onChange={onChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">мл</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs>
                <TextField
                    variant="outlined"
                    margin="dense"
                    value={form.volumeToBSA}
                    fullWidth
                    label="ИОЛП"
                    name="volumeToBSA"
                    autoComplete="volumeToBSA"
                    type="number"
                    autoFocus
                    onChange={onChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                мл/м<sub>2</sub>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    );
};

export default LPSection;
