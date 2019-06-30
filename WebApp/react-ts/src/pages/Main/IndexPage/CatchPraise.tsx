import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { HEIGHT } from '../../../Environment/Constances/Constance'
import { Theme, Typography } from "@material-ui/core";
import { mainTheme } from '../../../Environment/Themes/MainTheme';

const useStyles = makeStyles((theme: Theme) => {
    return ({
        wrapper: {
            backgroundColor: mainTheme.palette.primary.main,
            height: HEIGHT * 55,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        box:{
            margin:"0 auto",
            padding:"100px",
            color: "white"
        },
        desc:{
            color: "#aaaaaa"
        }
    })
})

const CatchPraise: React.SFC = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} >
            <div className={classes.box}>
                <Typography variant={"h1"}> Built for </Typography>
                <Typography variant={"h1"}> HoguShakkies</Typography>
                <br />
                <Typography variant={"h6"} className={classes.desc}>
                    GitHub is a development platform inspired by the
                    way you work. From open source to business, you
                    can host and review code, manage projects, and
                    trading money alongside 36 million dollors
                </Typography>
            </div>
        </div>
    );
}

export default CatchPraise;