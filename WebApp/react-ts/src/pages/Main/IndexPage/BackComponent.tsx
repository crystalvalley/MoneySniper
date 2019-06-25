import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    svgContainer: {
        position: "absolute",
        top: "42.25px",
        height: "calc(100% - 42.25px)",
        width: "100%",
        overflow: "hidden",
        zIndex: -1
    },
    svgPath: {
        fill: theme.palette.primary.main,
        boxShadow: "0 0 10px 10px",
    },
    svgPathShadow: {
        fill: "lightgray",
        boxShadow: "0 0 10px 10px"
    }
}))

const BackComponent: React.SFC = () => {
    const classes = useStyles();

    return (
        <div className={classes.svgContainer}>
            <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 200 200"
            >
                <defs>
                    <filter id="dropshadow">
                        <feGaussianBlur stdDeviation="0.17" result="blur" />
                    </filter>
                </defs>
                <path className={classes.svgPathShadow}
                    d="M 1.5 3 L 1.5 103 L 121.5 103 L 121.5 173 L 171 173 L 201 103 L 201 3 Z"
                    filter={"url(#dropshadow)"}
                />
                <path className={classes.svgPath}
                    d="M 0 0 L 0 100 L 120 100 L 120 170 L 170 170 L 200 100 L 200 0 Z"
                />
            </svg>
        </div>
    )
}


export default BackComponent;