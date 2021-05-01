import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Button from '@material-ui/core/Button';
import { firestore } from '../../firebase';

const Patients = () => {
    const [patiens, setPatients] = useState<any>([]);
    const [visits, setVisits] = useState<any>([]);

    const handleGet = async () => {
        const snapshot = await firestore.collection('patients').get();

        setPatients(snapshot.docs.map((doc) => doc.data()));
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

    const handleCreate = () => {
        firestore.collection('patients').add({
            id: v4(),
            firstName: 'Test',
            lastName: 'TestLast',
        });
    };

    const handleVisit = () => {
        firestore.collection('visits').add({
            id: v4(),
            patientId: patiens[1].id,
            createdAt: new Date().getTime(),
        });
    };

    return (
        <>
            <Button onClick={handleGet} variant="contained">
                Все пациенты
            </Button>
            <Button onClick={handleCreate} variant="contained" color="secondary">
                Сознать нового пациента
            </Button>
            <Button onClick={handleVisit} variant="contained" color="primary">
                Сознать новый визит
            </Button>
            <Button onClick={getVisits} variant="contained" color="primary">
                Визит
            </Button>
        </>
    );
};

export default Patients;
