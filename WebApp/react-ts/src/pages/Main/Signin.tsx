import React, { useReducer, useContext } from "react";
import { TextField, Theme, Button, Paper, Typography, Box, createMuiTheme, Grid, Hidden } from "@material-ui/core";
import axios from "axios";
import InputR from "../../Environment/Reducers/InputReducer"
import { UserLoginInfoContext } from "../../context/UserLoginInfoContextProvider"
import { withStyles, WithStyles } from '@material-ui/styles';
import CustomButton from "../../Environment/Components/CustomButton";
// 3개, 컴포넌트, 스타일, 리듀서
// 컴포넌트 , IProps
// 스타일
// 리듀서 IAction,IState

const styles = (theme: Theme) => ({
    root: {
        justifyContent: "center",
        alignItems: "center"
    },
    subRoot: {
        margin: "25px"
    },
    paper: {
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
        borderRadius: "4px",
        padding: "25px"
    },
    font: {
        [theme.breakpoints.up("xs")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        },
    },
    inner: {
        justifyContent: "center",
        marginBottom: "30px"
    },
    tField: {
    },
    btn: {
    },
})


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
        <Grid container className={classes.root}>
            <Grid container className={classes.subRoot} xl={4} lg={5} md={6} sm={9} xs={10} spacing={3} >
                <Grid item xs={12}>
                    <Box flexDirection="column" className={classes.paper}>
                        <Box className={classes.inner} flexGrow="1">
                            <Typography component="span" className={classes.font}>Email</Typography><br />
                            <TextField fullWidth className={classes.tField} placeholder="id" onChange={(e) => { inputDispatch({ type: "id", val: e.currentTarget.value }) }} /><br />
                        </Box>
                        <Box className={classes.inner}>
                            <Typography component="span" className={classes.font}>
                                Password
                            <CustomButton type="text" fullWidth={false} clickEvent={onLogin} text="Forgot you password?" className="" />
                            </Typography>
                            <br />
                            <TextField type="password" fullWidth className={classes.tField} placeholder="pw" onChange={(e) => { inputDispatch({ type: "pw", val: e.currentTarget.value }) }} /><br />
                        </Box>
                        <Box textAlign="Center" className={classes.inner} >
                            <CustomButton fullWidth={true} type="contained" clickEvent={onLogin} text="SIGN IN" className={classes.btn} />
                        </Box>
                        {/*<Button onClick={onLogin2}>test2</Button>*/}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography component="span" className={classes.font}>new to Money Sniper?</Typography>
                        <CustomButton fullWidth={false} type="text" clickEvent={onLogin} text="Join me" className="" />
                    </Paper>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default withStyles(styles)(Signin);
