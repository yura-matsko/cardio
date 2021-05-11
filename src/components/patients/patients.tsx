import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import firebase from 'firebase/app';
import MUIDataTable, { MUIDataTableOptions } from 'mui-datatables';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { getCollection } from '../../api';
import { formatDate } from '../../utils';
import { IPatientMapped } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
    }),
);

const columns = [
    {
        name: 'name',
        label: 'ФИО',
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: 'birthDate',
        label: 'Дата рождения',
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'phone',
        label: 'Телефон',
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'address',
        label: 'Адрес',
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'height',
        label: 'Рост',
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'weight',
        label: 'Вес',
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: 'bodyArea',
        label: 'S пов.тела',
        options: {
            filter: true,
            sort: false,
        },
    },
];

const Patients = (): JSX.Element => {
    const history = useHistory();
    const [response, setResponse] = useState<firebase.firestore.DocumentData[]>([]);
    const [patiens, setPatients] = useState<IPatientMapped[]>([]);

    const handleGet = async () => {
        const response = await getCollection('patients');

        const patients = response.reduce((acc: IPatientMapped[], item): IPatientMapped[] => {
            const {
                lastName,
                firstName,
                fatherName,
                birthDate,
                phone,
                postalCode,
                street,
                city,
                houseNumber,
                appartment,
                height,
                weight,
                bodyArea,
                id,
            } = item;

            const mapped = {
                name: `${lastName} ${firstName} ${fatherName}`,
                address: `${postalCode}, ${city}, ${street}, д. ${houseNumber}, кв. ${appartment}`,
                birthDate: formatDate(birthDate),
                phone,
                height,
                weight,
                bodyArea,
                id,
            } as IPatientMapped;

            return [...acc, mapped] as IPatientMapped[];
        }, []);

        setResponse(response);
        setPatients(patients);
    };

    useEffect(() => {
        (async () => {
            await handleGet();
        })();
    }, []);

    const classes = useStyles();

    const handleRowClick = (_: string[], rowMeta: { dataIndex: number; rowIndex: number }) => {
        if (!response) return;

        const user = response[rowMeta.rowIndex];

        if (!user) return;

        history.push(`/patient/${user.id}`);
    };

    const options = {
        pagination: false,
        print: false,
        download: false,
        selectableRows: 'none',
        onRowClick: handleRowClick,
    };

    return (
        <>
            <MUIDataTable title="Пациенты" columns={columns} data={patiens} options={options as MUIDataTableOptions} />
            <Grid className={classes.container} container direction="row" justify="flex-end" alignItems="center">
                <Button component={Link} to="/new-patient" size="large" variant="contained" color="primary">
                    Сознать нового пациента
                </Button>
            </Grid>
        </>
    );
};

export default Patients;
