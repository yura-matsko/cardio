import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IVisitFormSection } from '../../interfaces';

const LZHSection = ({ form, onChange }: IVisitFormSection): JSX.Element => {
    return (
        <>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={1}>
                    <Typography variant="h4">ЛЖ</Typography>
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.mzhp}
                        fullWidth
                        label="МЖП"
                        name="mzhp"
                        autoComplete="mzhp"
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
                        value={form.kdr}
                        fullWidth
                        label="КДР"
                        name="kdr"
                        autoComplete="kdr"
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
                        value={form.kdo}
                        fullWidth
                        label="КДО"
                        name="kdo"
                        autoComplete="kdo"
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
                        value={form.kdoToBSA}
                        fullWidth
                        label="КДО индекс"
                        name="kdoToBSA"
                        autoComplete="kdoToBSA"
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
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.gls}
                        fullWidth
                        label="GLS"
                        name="gls"
                        autoComplete="gls"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
                        value={form.zs}
                        fullWidth
                        label="ЗС"
                        name="zs"
                        autoComplete="zs"
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
                        value={form.ksr}
                        fullWidth
                        label="КСР"
                        name="ksr"
                        autoComplete="ksr"
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
                        value={form.kso}
                        fullWidth
                        label="КСО"
                        name="kso"
                        autoComplete="kso"
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
                        value={form.uoToBSA}
                        fullWidth
                        label="УО индекс"
                        name="uoToBSA"
                        autoComplete="uoToBSA"
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
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.fb3d}
                        fullWidth
                        label="ФВ (3D)"
                        name="fb3d"
                        autoComplete="fb3d"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
                        value={form.mm}
                        fullWidth
                        label="ММ (Мреж)"
                        name="mm"
                        autoComplete="mm"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">гр</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.fu}
                        fullWidth
                        label="ФУ (М)"
                        name="fu"
                        autoComplete="fu"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.uo}
                        fullWidth
                        label="УО"
                        name="uo"
                        autoComplete="uo"
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
                        value={form.mok}
                        fullWidth
                        label="МОК"
                        name="mok"
                        autoComplete="mok"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">л/мин</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.DPtoDT}
                        fullWidth
                        label="DP/DT"
                        name="DPtoDT"
                        autoComplete="DPtoDT"
                        type="number"
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.mmToBSA}
                        fullWidth
                        label="ММ индекс"
                        name="mmToBSA"
                        autoComplete="mmToBSA"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    гр/м<sub>2</sub>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.ots}
                        fullWidth
                        label="ОТС"
                        name="ots"
                        autoComplete="ots"
                        type="number"
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.fvSimpson}
                        fullWidth
                        label="ФВ Simpson"
                        name="fvSimpson"
                        autoComplete="fvSimpson"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        value={form.mokToBSA}
                        fullWidth
                        label="СИ (В)"
                        name="mokToBSA"
                        autoComplete="mokToBSA"
                        type="number"
                        autoFocus
                        onChange={onChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    л/мин/м<sub>2</sub>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </>
    );
};

export default LZHSection;
