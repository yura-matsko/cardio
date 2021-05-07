/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PatientForm } from '../patient-form';

import { queryCollection, IQuery } from '../../api';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    }),
);

const Patient = (): JSX.Element => {
    const [patient, setPatient] = useState<any>(null);
    const [edit, setEdit] = useState<boolean>(false);
    const params = useParams<any>();

    const handleGet = async () => {
        const query = {
            fieldPath: 'id',
            opStr: '==',
            value: params?.id,
        } as IQuery;

        const response = await queryCollection('patients', query);

        setPatient(response[0]);
    };

    const handleEdit = () => setEdit(!edit);

    useEffect(() => {
        (async () => {
            await handleGet();
        })();
    }, []);

    const classes = useStyles();

    if (!patient)
        return (
            <Container component="main" maxWidth="lg">
                <Typography gutterBottom variant="h4">
                    Не удалось опознать пациента, это точно не Джейсон Борн?
                </Typography>
            </Container>
        );

    return (
        <Container component="main" maxWidth="lg">
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h3">Карта пациента</Typography>
                {!edit ? (
                    <Button onClick={handleEdit} size="large" variant="contained" color="secondary">
                        Редактировать
                    </Button>
                ) : null}
            </Grid>
            <div className={classes.container}>
                <PatientForm initialValue={patient} editForm={edit} onEdit={handleEdit} />
            </div>
        </Container>
    );
};

export default Patient;
