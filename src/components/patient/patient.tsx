import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PatientForm } from '../patient-form';
import { VisitForm } from '../visit-form';

import { queryCollection, deleteDocument, IQuery } from '../../api';
import { IPatient } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(4),
        },
        btn: {
            marginRight: theme.spacing(3),
        },
    }),
);

const Patient = (): JSX.Element => {
    const [patient, setPatient] = useState<IPatient | null>(null);
    const [edit, setEdit] = useState<boolean>(false);
    const params = useParams<{ id: string } | null>();
    const history = useHistory();

    const handleGet = async () => {
        const query = {
            fieldPath: 'id',
            opStr: '==',
            value: params?.id,
        } as IQuery;

        const response = await queryCollection('patients', query);

        setPatient(response[0] as IPatient);
    };

    const handleEdit = () => setEdit(!edit);

    const handleDelete = async () => {
        try {
            await deleteDocument('patients', params?.id);

            history.push(`/`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            await handleGet();
        })();
    }, []);

    const classes = useStyles();

    if (!patient)
        return (
            <Typography gutterBottom variant="h4">
                Не удалось опознать пациента, это точно не Джейсон Борн?
            </Typography>
        );

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h4">Карта пациента</Typography>
                {!edit ? (
                    <div>
                        <Button
                            onClick={handleDelete}
                            className={classes.btn}
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Удалить
                        </Button>
                        <Button onClick={handleEdit} size="large" variant="contained">
                            Редактировать
                        </Button>
                    </div>
                ) : null}
            </Grid>
            <div className={classes.container}>
                <PatientForm initialValue={patient} editForm={edit} onEdit={handleEdit} />
            </div>
            <VisitForm bodyArea={patient?.bodyArea as string} />
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h4">История</Typography>
            </Grid>
        </>
    );
};

export default Patient;
