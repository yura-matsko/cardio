import React from "react";
import Button from '@material-ui/core/Button';
import { firestore } from '../../firebase'

const Patients = () => {
  const handleCreate = () => {
    firestore.collection('patients').add({
      firstName: 'Test',
      lastName: 'TestLast',
    });
  }
  
  return (
    <Button onClick={handleCreate} variant="contained" color="secondary">Сознать нового пациента</Button>
  )
}

export default Patients;
