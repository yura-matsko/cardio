/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { calculateIndexToBSA, calculateMyocardialMass } from '../../math';

import AOSection from './ao-section';
import LPSection from './lp-section';
import LZHSection from './lzh-section';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        btn: {
            marginRight: theme.spacing(3),
        },
        createBtn: {
            minHeight: theme.spacing(8),
            fontSize: '3rem',
            marginBottom: theme.spacing(4),
        },
    }),
);

const defaultForm = {
    sinus: '',
    peresheek: '',
    vosh: '',
    volume: '',
    duga: '',
    nish: '',
    mrezh: '',
    vrezh: '',
    sinusToBSA: '',
    peresheekToBSA: '',
    voshToBSA: '',
    volumeToBSA: '',
    mzhp: '',
    kdr: '',
    kdo: '',
    kdoToBSA: '',
    gls: '',
    zs: '',
    ksr: '',
    kso: '',
    uoToBSA: '',
    fb3d: '',
    mm: '',
    fu: '',
    uo: '',
    mok: '',
    DPtoDT: '',
    mmToBSA: '',
    ots: '',
    fvSimpson: '',
    si: '',
};

type VisitFormProps = {
    bodyArea: string;
};

type ACTIONTYPE =
    | { type: 'CHANGE'; name?: string; value: string }
    | { type: 'CALCULATE'; name?: string; value: string }
    | { type: 'CALCULATE_INDEXES'; name?: string; value: string };

const reducer = (state: any, { type, name, value }: ACTIONTYPE) => {
    switch (type) {
        case 'CHANGE':
            if (!name) return;
            return { ...state, [name]: value };

        case 'CALCULATE':
            const { mzhp, kdr, zs } = state;
            const result = {} as Record<string, string>;

            if (mzhp && kdr && zs) {
                result.mm = calculateMyocardialMass(mzhp, kdr, zs);
            }

            return { ...state, ...result };

        case 'CALCULATE_INDEXES':
            if (!value) return;
            const absoluteValues = ['sinus', 'peresheek', 'vosh', 'volume', 'kdo', 'uo', 'mm'] as string[];
            const calculateIndexes = absoluteValues.reduce(
                (acc, item: string) => ({
                    [`${item}ToBSA`]: calculateIndexToBSA(state[item], value),
                    ...acc,
                }),
                {},
            );

            return { ...state, ...calculateIndexes };

        default:
            throw new Error('Failed to save');
    }
};

const VisitForm = ({ bodyArea }: VisitFormProps): JSX.Element => {
    const classes = useStyles();
    const [form, dispatch] = useReducer(reducer, defaultForm);
    const [visit, setVisit] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: { name, value },
        } = event;

        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
    };

    const handleCalculate = () => {
        dispatch({
            type: 'CALCULATE',
            value: bodyArea,
        });

        dispatch({
            type: 'CALCULATE_INDEXES',
            value: bodyArea,
        });
    };

    const handleVisitCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            console.log(form);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateVisit = () => setVisit(!visit);

    return (
        <>
            {!visit ? (
                <Button
                    className={classes.createBtn}
                    color="primary"
                    onClick={handleCreateVisit}
                    fullWidth
                    variant="contained"
                >
                    Новое обследование
                </Button>
            ) : null}
            {visit ? (
                <>
                    <form onSubmit={handleVisitCreate}>
                        <AOSection form={form} onChange={handleInputChange} />
                        <LPSection form={form} onChange={handleInputChange} />
                        <LZHSection form={form} onChange={handleInputChange} />
                        <Grid
                            className={classes.button}
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                        >
                            <Button onClick={handleCalculate} className={classes.btn} size="large" variant="contained">
                                Расчитать
                            </Button>
                            <Button size="large" type="submit" variant="contained" color="primary">
                                Сохранить
                            </Button>
                        </Grid>
                    </form>
                </>
            ) : null}
        </>
    );
};

export default VisitForm;
