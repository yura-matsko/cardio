import React from 'react';
import { PatientForm } from '../patient-form';
import Typography from '@material-ui/core/Typography';

const CreatePatient = (): JSX.Element => {
    return (
        <>
            <Typography gutterBottom variant="h4">
                Новый пациент
            </Typography>
            <PatientForm />
        </>
    );
};

export default CreatePatient;
