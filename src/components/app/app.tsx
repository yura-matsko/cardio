import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SignIn } from '../sign-in';
import { Main } from '../main';

import { auth } from '../../firebase';

const App = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            setUser(userAuth);
            setLoader(false);
        });
    }, []);

    if (loader) {
        return (
            <Backdrop open>
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    return (
        <>
            <CssBaseline />
            {user ? (
                <Main />
            ) : (
                <Router>
                    <Route path="/">
                        <SignIn />
                    </Route>
                </Router>
            )}
        </>
    );
};

export default App;
