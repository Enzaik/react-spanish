import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppBar from '../../containers/AppBar/AppBar';
import Lessons from '../../containers/Lessons/Lessons';

export default function Layout() {


    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            color: 'red'
        }
    }));
    const classes = useStyles();

    const layout = (
        <div id={classes.root}>
            <AppBar />
            <Lessons />
        </div>
    );
    return layout;





};

