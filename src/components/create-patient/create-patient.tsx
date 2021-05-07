import React from 'react';
import { PatientForm } from '../patient-form';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const CreatePatient = (): JSX.Element => {
    return (
        <Container component="main" maxWidth="lg">
            <Typography gutterBottom variant="h4">
                Новый пациент
            </Typography>
            <PatientForm />
        </Container>
    );
};

export default CreatePatient;
