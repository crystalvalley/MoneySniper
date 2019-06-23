import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { withStyles, WithStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
    paper: {

    },
    root: {

    }
}

const gridLayoutComponent: React.SFC<WithStyles<typeof styles>> = (props) => {

    const classes = props.classes
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={12} md={12} lg={12} xl={12}>
                    <Paper className={classes.paper}>all 12</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(gridLayoutComponent);