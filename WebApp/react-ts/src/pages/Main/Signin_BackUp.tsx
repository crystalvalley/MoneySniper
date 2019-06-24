import React, { useReducer, useContext } from "react";
import { TextField, Button, Paper, Typography, Box, createMuiTheme } from "@material-ui/core";
import axios from "axios";
import InputR from "../../Environment/Reducers/InputReducer"
import { UserLoginInfoContext } from "../../context/UserLoginInfoContextProvider"
import { withStyles, WithStyles } from '@material-ui/styles';
import CustomButton from "../../Environment/Components/CustomButton";
// 3개, 컴포넌트, 스타일, 리듀서
// 컴포넌트 , IProps
// 스타일
// 리듀서 IAction,IState

const styles = {
    paper: {
        top: "10vh",
        width: "25vw",
        minWidth: "400px",
        height: "20vw",
        minHeight: "320px",
        margin: "0 auto",
        marginTop: "10vh",
        padding: "35px 20px 35px 20px",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
        borderRadius: "4px"
    },
    smallPaper: {
        top: "20vw",
        width: "25vw",
        minWidth: "400px",
        height: "3.5vw",
        minHeight: "67px",
        margin: "0 auto",
        marginTop: "30px",
        padding: "15px",

    },
    typho: {
        fontSize: "1.5rem",
        fontWeight: 500,
        margin: "20px 0px 20px 0px"
    },
    blue: {
        color: "blue",
    },
    inner: {
        marginBottom: "35px"
    },
    tField: {
        marginTop: "15px"
    },
    btn: {
        marginTop: "25px"
    },
}


interface Action {
    type: string,
    setId?(id: string): void
    setId2?(id: string): void
    val?: IState
}

interface IState {
    id: string,
    pw: string
}

const LoginR = (state: IState, action: Action) => {
    switch (action.type) {
        case "setId":
            action.setId!(state.id);
            axios.post("URL", {
                param: {
                    id: state.id,
                    pw: state.pw
                }
            }).then((res) => {
                if (res.data.success) {
                }
            })
            return state;
            break;
        case "setId2":
            action.setId2!(state.id);
            axios.post("URL", {
                param: {
                    id: state.id,
                    pw: state.pw
                }
            }).then((res) => {
                if (res.data.success) {
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

const Signin: React.SFC<WithStyles<typeof styles>> = (props) => {
    const { classes } = props;
    const inputR = InputR<{ id: string, pw: string }>();
    const [inputState, inputDispatch] = useReducer(inputR, { id: "", pw: "" })
    const [loginState, loginDispatch] = useReducer(LoginR, { id: "", pw: "" })
    const c = useContext(UserLoginInfoContext)

    const onLogin = () => {
        loginDispatch({ type: "stateChange", val: inputState })
        loginDispatch({ type: "setId", setId: c.setId })
    }

    const onLogin2 = () => {
        loginDispatch({ type: "stateChange", val: inputState })
        loginDispatch({ type: "setId2", setId2: c.setId2 })
    }


    return (
        <div>
            <Box flexDirection="column" className={classes.paper}>
                <Box className={classes.inner} flexGrow="1">
                    <Typography component="span" className={classes.typho}>Email</Typography><br />
                    <TextField fullWidth className={classes.tField} placeholder="id" onChange={(e) => { inputDispatch({ type: "id", val: e.currentTarget.value }) }} /><br />
                </Box>
                <Box className={classes.inner} flexGrow="1">
                    <Typography component="span" className={classes.typho}>Password   </Typography>
                    {/*<Typography align="right" component="span" className={classes.blueTypho}>forgot your password?</Typography>*/}
                    <CustomButton type="text" fullWidth={false} clickEvent={onLogin} text="Forgot you password?" className={classes.blue} />
                    <br />
                    <TextField type="password" fullWidth className={classes.tField} placeholder="pw" onChange={(e) => { inputDispatch({ type: "pw", val: e.currentTarget.value }) }} /><br />
                </Box>
                <Box textAlign="Center" className={classes.inner}>
                    <CustomButton fullWidth={true} type="contained" clickEvent={onLogin} text="SIGN IN" className={classes.btn} />
                </Box>
                {/*<Button onClick={onLogin2}>test2</Button>*/}
            </Box>
            <Paper className={classes.smallPaper}>
                <Typography component="span" className={classes.typho}>new to Money Sniper?</Typography>
                <CustomButton fullWidth={false} type="text" clickEvent={onLogin} text="Join me" className={classes.blue} />
            </Paper>
        </div>
    )
}

export default withStyles(styles)(Signin);