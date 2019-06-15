import React, {useReducer, useContext} from "react";
import {TextField,Button ,Paper, Typography} from "@material-ui/core";
import axios from "axios";
import InputR from "../../Environment/Reducers/InputReducer"
import {UserLoginInfoContext} from "../../context/UserLoginInfoContextProvider"
import { withStyles, WithStyles } from '@material-ui/styles';

// 3개, 컴포넌트, 스타일, 리듀서
// 컴포넌트 , IProps
// 스타일
// 리듀서 IAction,IState


const styles={
    paper:{
        width: "25vw",
        minWidth:"480px",
        height: "20vw",
        minHeight:"384px",
        margin:"0 auto",
        padding:"35px 20px 35px 20px",
    },
    smallPaper:{
        top:"20vw",
        width: "25vw",
        minWidth:"480px",
        height: "3.5vw",
        minHeight:"67px",
        margin:"0 auto",
        marginTop:"30px",
        padding:"15px",

    },
    typho:{
        fontSize:"1.5rem",
        fontWeight:500,
        margin:"20px 0px 20px 0px"
    },
    blueTypho:{
        color:"blue",
        fontStyle:"underline",
        testAlign:"right"
    }
}

interface Action{
    type: string,
    setId?(id:string):void
    setId2?(id:string):void
    val?: IState
}

interface IState{
    id:string,
    pw:string
}

const LoginR = (state: IState, action: Action)=>{
    switch(action.type) {
        case "setId":
            action.setId!(state.id);
            axios.post("URL",{
                param:{
                    id:state.id,
                    pw:state.pw
                }
            }).then((res)=>{
                if(res.data.success){
                }
            })
            return state;
            break;
        case "setId2":
            action.setId2!(state.id);
            axios.post("URL",{
                param:{
                    id:state.id,
                    pw:state.pw
                }
            }).then((res)=>{
                if(res.data.success){
                }
            })
            return state;
            break;
        case "stateChange":
            return action.val!;
            break;
        default:
            return state;
            break;
    }
}

const Signin :React.SFC<WithStyles<typeof styles>> = (props) => { 
    const { classes } = props;
    const inputR = InputR<{id:string,pw:string}>();
    const [inputState, inputDispatch] = useReducer(inputR, {id:"",pw:""})
    const [loginState, loginDispatch] = useReducer(LoginR, {id:"",pw:""})
    const c = useContext(UserLoginInfoContext)

    const onLogin = () => {
        loginDispatch({type: "stateChange", val: inputState})
        loginDispatch({type: "setId", setId:c.setId})
    }

    const onLogin2 = () => {
        loginDispatch({type: "stateChange", val: inputState})
        loginDispatch({type: "setId2", setId2:c.setId2})
    }


    return (
        <div>
            {c.id}<br />
            <Paper className={classes.paper}>
                <Typography className={classes.typho}>Email</Typography><br/>
                <TextField fullWidth placeholder="id"  onChange={(e) => { inputDispatch({type:"id",val:e.currentTarget.value})}} /><br />
                <Typography className={classes.typho}>Password</Typography>
                <Typography className={classes.blueTypho}>forgot your password?</Typography><br/>           
                <TextField fullWidth placeholder="pw" onChange={(e) => { inputDispatch({type:"pw",val:e.currentTarget.value})}}/><br />
                <Button onClick={onLogin}>test</Button>                
                <Button onClick={onLogin2}>test2</Button>                
            </Paper>
            <Paper className={classes.smallPaper}>
                <Typography className={classes.typho}>new to Money Sniper?</Typography>
                <Typography className={classes.blueTypho}>join me</Typography><br/>           
            </Paper> 
        </div>
    )
}

export default withStyles(styles)(Signin);