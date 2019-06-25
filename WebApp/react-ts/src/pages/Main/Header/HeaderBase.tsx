import React from 'react';
import { AppBar, Typography, Toolbar, Theme, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import CustomButton from '../../../Environment/Components/CustomButton';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        color: "white"
    },
    head: {
        backgroundColor: theme.palette.primary.dark,
    }
}))

const HeaderBase: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.head}>
            <Grid container>
                <Grid item xl={3} lg={3} />
                <Grid item>
                </Grid>
                <Grid item>
                    <NavLink to="/test">
                        <CustomButton className={classes.link} text="test" fullWidth={false} type="text" />
                    </NavLink>
                </Grid>
                <Grid item>
                    <NavLink to="/test2">
                        <CustomButton className={classes.link} text="test2" fullWidth={false} type="text" />
                    </NavLink>
                </Grid>
                <Grid item>
                    <NavLink exact to="/signin">
                        <CustomButton className={classes.link} text="index" fullWidth={false} type="text" />
                    </NavLink>
                </Grid>
                <Grid item xl={3} lg={3} />
            </Grid>
        </AppBar>
    );
}

export default HeaderBase;