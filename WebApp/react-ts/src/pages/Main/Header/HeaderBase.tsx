import React from 'react';
import { AppBar, Typography, Toolbar, Theme, Grid } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/styles';
import CustomButton from '../../../Environment/Components/CustomButton';
import { NavLink } from 'react-router-dom';

const styles = (theme: Theme) => ({
    link: {
        color: "white"
    },
    head: {
        justfyContent: "center"
    }
})

const HeaderBase: React.FC<WithStyles<typeof styles>> = (props) => {
    const classes = props.classes;
    return (
        <AppBar position="static" className={classes.head}>
            <Grid container spacing={3}>
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
                    <NavLink to="/test3">
                        <CustomButton className={classes.link} text="test3" fullWidth={false} type="text" />
                    </NavLink>
                </Grid>
                <Grid item xl={3} lg={3} />
            </Grid>
        </AppBar>
    );
}

const Rrouter: React.FC = () => {
    return (
        <NavLink to="/test" />
    )
}

export default withStyles(styles)(HeaderBase);