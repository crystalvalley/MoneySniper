import React, { useEffect, useState, useReducer } from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import SignIn from './Main/Signin'

const styles = {
    root: {
        border: 0
    },
};


interface IProps { name?: string }

interface IState {
    id: string,
    pw: string,
    mail: string,
}


interface Action{
    type : "id"|"pw"|"mail"|"start",
    val?: string
}


const reducer = (state: IState, action: Action)=>{
    console.log(action.type)
    switch (action.type) {
        case "start":
            console.log("test");
            axios.post("http:localhost:3001/home/login",{
                param:{
                   id: state.id,
                   pw: state.pw,
                   mail: state.mail 
                }
            })
            return state;
        default:
            return {
                ...state,
                [action.type]: action.val
            };
    };
}

const initialState : IState = {
    id : "",
    mail:"",
    pw:"",
}

const Test: React.FC<IProps & WithStyles<typeof styles>> = (props) => {
    const { classes } = props;

    /*
    const [ serverTime , setServerTime ] = useState();
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [mail, setMail] = useState();
    const [start, setStart]  = useState(0);
    */
    const [state, dispatch] =useReducer(reducer, initialState);

    return (
        <div>
            <TextField placeholder="id"  onChange={(e) => { dispatch({type:"id",val:e.currentTarget.value})}} /><br />
            <TextField placeholder="pw" onChange={(e) => { dispatch({type:"pw",val:e.currentTarget.value})}}/><br />
            <TextField placeholder="email" onChange={(e) => { dispatch({type:"mail",val:e.currentTarget.value})}} />
            <Button className={classes.root} onClick={() =>  dispatch({type:"start"}) }>SignUp</Button>
        </div>
    );
}

export default withStyles(styles)(Test);