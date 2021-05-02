import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { firestore } from '../../firebase';

const Patients = (): JSX.Element => {
    const [patiens, setPatients] = useState<any>([]);
    const [visits, setVisits] = useState<any>([]);

    const handleGet = async () => {
        const snapshot = await firestore.collection('patients').get();

        const data = snapshot.docs
            .map((doc) => doc.data())
            .reduce((acc: any, item: any) => {
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
                } = item;

                const mapped = {
                    name: `${lastName} ${firstName} ${fatherName}`,
                    address: `${postalCode}, ${city}, ${street}, д. ${houseNumber}, кв. ${appartment}`,
                    birthDate,
                    phone,
                    height,
                    weight,
                    bodyArea,
                };

                return [mapped, ...acc];
            }, []);

        setPatients(data);
    };

    const getVisits = async () => {
        if (!patiens.length) {
            return;
        }

        const visitsRef = await firestore.collection('visits');

        const snapshot = await visitsRef.where('patientId', '==', patiens[1]?.id).get();

        console.log(snapshot.docs.map((doc) => doc.data()));

        //setVisits(query.docs.map(doc => doc.data()))
    };

    useEffect(() => {
        (async () => {
            await handleGet();
        })();
    }, []);

    const handleVisit = () => {
        firestore.collection('visits').add({
            id: v4(),
            patientId: patiens[1].id,
            createdAt: new Date().getTime(),
        });
    };

    return (
        <>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Typography variant="h3">Пациенты</Typography>
                <Button component={Link} to="/new-patient" size="large" variant="contained" color="secondary">
                    Сознать нового пациента
                </Button>
            </Grid>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ФИО</TableCell>
                            <TableCell>Дата рождения</TableCell>
                            <TableCell>Телефон</TableCell>
                            <TableCell>Адрес</TableCell>
                            <TableCell>Рост</TableCell>
                            <TableCell>Вес</TableCell>
                            <TableCell>S пов.тела</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patiens.map((row: any) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.birthDate}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.height}</TableCell>
                                <TableCell>{row.weight}</TableCell>
                                <TableCell>{row.bodyArea}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Patients;
