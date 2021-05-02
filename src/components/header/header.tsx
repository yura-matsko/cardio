import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { auth } from '../../firebase';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        logo: {
            height: 48,
        },
    }),
);

const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.logo}>
                        <Logo />
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        День прошел, в кармане доллар
                    </Typography>
                    <Button onClick={() => auth.signOut()} variant="contained">
                        Выйти
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
