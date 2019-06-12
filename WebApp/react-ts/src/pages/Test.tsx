import React from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
const styles= {
  root: {
      border:0
  },
};


interface IProps{name?: string} 


const Test : React.FC<IProps&WithStyles<typeof styles>> = (props) => {
    const { classes } = props;
    return (
        <Button className={classes.root}>button</Button>
    );
}

export default withStyles(styles)(Test);