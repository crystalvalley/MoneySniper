import React from 'react';
import {Typography,Theme} from "@material-ui/core"
import {makeStyles,createStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme:Theme)=>{
    return ({
        wrapper:{
            textAlign:"center"
        }
    })
})

const ShowDocument : React.FC = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <h1>Get started with Money Sniper</h1>
            <Typography>
                Take collaboration to the next level with security 
                and administrative features built for businesses.
            </Typography>
        </div>
    )
}

export default ShowDocument;