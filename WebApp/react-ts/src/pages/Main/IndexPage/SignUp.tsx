import React, { useReducer } from 'react';
import { Paper, Typography, TextField, Theme } from '@material-ui/core'
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/styles';
import { mainTheme } from '../../../Environment/Themes/MainTheme';
import CustomButton from '../../../Environment/Components/CustomButton'
import { callbackify } from 'util';
import { HEIGHT } from '../../../Environment/Constances/Constance';
import InputR from '../../../Environment/Reducers/InputReducer'
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        paddingBottom: "29px",
        paddingLeft: "29px",
        paddingRight: "29px"
    },
    form: {
        padding: "15px",
    },
    signup: {
        textAlign: "center",
        fontSize:"3rem"
    },
    box: {
        backgroundColor: mainTheme.palette.primary.main,
        height: HEIGHT * 85,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            display: "inherit",
            height: "auto"
        }
    },
    signUpBtn: {
        fontSize: "2em",
        backgroundColor: "#00A507"
    },
    bTypo: {
        color: "red",
        fontSize: "1.1em"
    }
}))

interface IState {
    username: string,
    email: string,
    password: string
}

const SignUp: React.FC = () => {
    const classes = useStyles();
    const inputR = InputR<IState>();
    const [inputState, inputDispatch] = useReducer(inputR, { username: "", email: "", password: "" })
    const requestSignUp = () => {
        axios.post("URL",{
            param:{
                username : inputState.username,
                email : inputState.email,
                password : inputState.password
            }
        }).then((res)=>{
            console.log(res);
        })
    }
    return (
        <div className={classes.box}>
            <div className={classes.wrapper}>
                <Paper className={classes.form}>
                    <br />
                    <Typography className={classes.signup}>SIGN UP</Typography>
                    <br /><br />
                    <Typography variant={"h6"} >USERNAME</Typography>
                    <TextField fullWidth placeholder="username"
                        onChange={(e) => { inputDispatch({ type: "username", val: e.currentTarget.value }) }}
                    />
                    <br /><br />
                    <Typography variant={"h6"} >E-MAIL</Typography>
                    <TextField fullWidth placeholder="e-mail"
                        onChange={(e) => { inputDispatch({ type: "email", val: e.currentTarget.value }) }}
                    />
                    <br /><br />
                    <Typography variant={"h6"} >PASSWORD</Typography>
                    <TextField fullWidth placeholder="password" type="password"
                        onChange={(e) => { inputDispatch({ type: "password", val: e.currentTarget.value }) }}
                    />
                    <br /><br />
                    <Typography>
                        비밀번호는 숫자 영어 대소문자 및 특수 문자를 포함하여 <b className={classes.bTypo}>반드시
                        10자 이상</b>으로 설정해 주십시오.
                    </Typography>
                    <br />
                    <CustomButton
                        text="SignUP"
                        type="contained"
                        fullWidth={true}
                        className={classes.signUpBtn}
                        clickEvent={requestSignUp}
                    />
                    <br /><br />
                    <b className={classes.bTypo}>라이센스 및 이용약관에 대한 규정</b>은 여기서 확인하실 수 있습니다.
                </Paper>
            </div>
        </div>
    );
}

export default SignUp;