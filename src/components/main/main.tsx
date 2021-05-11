import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Header } from '../header';
import { CreatePatient } from '../create-patient';
import { Patients } from '../patients';
import { Patient } from '../patient';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    }),
);

const Main = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Switch>
                    <Route path="/new-patient">
                        <CreatePatient />
                    </Route>
                    <Route path="/patient/:id">
                        <Patient />
                    </Route>
                    <Route path="/">
                        <Patients />
                    </Route>
                </Switch>
            </Container>
        </>
    );
};

export default Main;
