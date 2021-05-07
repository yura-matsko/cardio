/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { getCollection } from '../../api';
import { formatDate } from '../../utils';

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
    const [response, setResponse] = useState<any>([]);
    const [patiens, setPatients] = useState<any>([]);

    const handleGet = async () => {
        const response = await getCollection('patients');

        const patients = response.reduce((acc: any, item: any) => {
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
            };

            return [...acc, mapped];
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

    const handleRowClick = (_: any, rowMeta: any) => {
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
            <MUIDataTable title="Пациенты" columns={columns} data={patiens} options={options as any} />
            <Grid className={classes.container} container direction="row" justify="flex-end" alignItems="center">
                <Button component={Link} to="/new-patient" size="large" variant="contained" color="secondary">
                    Сознать нового пациента
                </Button>
            </Grid>
        </>
    );
};

export default Patients;
