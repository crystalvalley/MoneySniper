import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Grid, Hidden } from "@material-ui/core";
import SignUp from './SignUp';
import { mainTheme } from '../../../Environment/Themes/MainTheme';
import {HEIGHT} from '../../../Environment/Constances/Constance'
import CatchPraise from './CatchPraise';
import ShowDocument from './ShowDocument';

const useStyles = makeStyles((theme: Theme) => {
    return ({
        gridContainer: {
            overflow:"hidden"
        },       
        box3: {
            backgroundColor: mainTheme.palette.primary.main,
            height: HEIGHT * 45,
        },
        box4: {
            top: "50vh",
            borderBottom: HEIGHT * 40 + "px solid transparent",
            borderLeft: "16.66vw solid " + mainTheme.palette.primary.main
        },
        content:{
            textAlign: "center"
        }
    })
})

const IndexPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer}>
            <Grid container>
                <Grid item xs={false} md={6} lg={7}>
                    <CatchPraise/>
                    <ShowDocument/>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                        <SignUp />
                </Grid>
                <Grid item xs={false} lg={2}>
                    <Hidden mdDown>
                        <div className={classes.box3} />
                        <div className={classes.box4} />
                    </Hidden>
                </Grid>
            </Grid>
            <Grid item className={classes.content} lg={12}>
                <br/>
                <h1>우리는 이런 놈들입니다.</h1>
                <h2>Show Document</h2>
                <br/>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
                <h1>밑으로 무한 스크롤</h1>
            </Grid>
        </Grid>
    );
}

export default IndexPage;