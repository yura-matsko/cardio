import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { PatientForm } from '../patient-form';

import { queryCollection, deleteDocument, IQuery } from '../../api';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        },
        btn: {
            marginRight: theme.spacing(3),
        },
    }),
);

const VisitsList = (): JSX.Element => {
    const classes = useStyles();

    return <div>Visits</div>;
};

export default VisitsList;
