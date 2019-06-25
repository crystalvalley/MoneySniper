import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Theme, Grid } from "@material-ui/core";
import BackComponent from './BackComponent'
import SignUp from './SignUp'

const styles = (theme: Theme) => ({
    box: {
        backgroundColor: "blue",
        height: "calc(50vh - 42.25px)"
    }
})

const IndexPage: React.FC<WithStyles<typeof styles>> = (props) => {
    const classes = props.classes;
    return (
        <div className="wrapperDIV" style={{ color: "blue" }}>
            <BackComponent />
            <SignUp/>
        </div>
    );
}

export default withStyles(styles)(IndexPage);