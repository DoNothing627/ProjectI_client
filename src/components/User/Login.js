import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import React, { useState } from "react";
import classes from '../../assets/CSS/Login.module.css'
import backGroundImage from '../../assets/image/background/0.jpg'
import Register from "./Register";
import axios from "axios";
import styled from 'styled-components'

const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom:1px solid #${(props) => props.color};
    width: 80%;
    padding: 10px 10px;
    margin-left: 20px;
`;

const Login = props => {
    const [register, setRegister] = useState(0);
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState('000')
    const [isPasswordValid, setIsPasswordValid] = useState('000')

    const onClickHandle = () => {
        setRegister(1);
    }

    const onClickHandleOff = () => {
        setRegister(0);
    }

    const onClickHandleLogin = async () => {
        const data = {
            username: enteredEmail,
            password: enteredPassword
        }
        try {
            const res = await axios.post('http://127.0.0.1:8080/user/login', data)
            localStorage.setItem('jwt', res.data.jwt)
            localStorage.setItem('email', enteredEmail)
            props.onProfileClickHandleOff()
        }
        catch (error) {
            console.log(error)
            alert('Tên đăng nhập hoặc mật khẩu sai')
        }
    }

    const onChangeEmailHandle = event => {
        setEnteredEmail(event.target.value);
        if (event.target.value.includes('@') == false) setIsEmailValid('f00')
        else setIsEmailValid('000')
    }

    const onChangePasswordHandle = event => {
        setEnteredPassword(event.target.value);
        console.log(event.target.value)
        if (event.target.value.trim().length < 6) setIsPasswordValid('f00')
        else setIsPasswordValid('000')
    }

    return <>
        <div className={classes.backdrop} onClick={props.onProfileClickHandleOff} />

        {register == 1 && <Register onClickHandleOff={onClickHandleOff} />}
        {register == 0 && <div className={classes.container}>
            <span className={classes.info}>
                <img className={classes.girl} src={backGroundImage} />
                <div className={classes.desc}>
                    <div className={classes.big}>Hello World.</div>
                    <div className={classes.small}>
                        <p>Login with social media</p>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </span>
            <span className={classes.main_function}>
                <div className={classes.rebig}>Login</div>
                <div className={classes.resmall}>
                    <div>Don't have an account?</div>
                    <a className={classes.a} onClick={onClickHandle}> Create your account</a>
                    <div>, it takes less than a minute</div>
                </div>
                <label className={classes.checkbox}> Email</label>
                <Input color={isEmailValid}
                    type="email"
                    onChange={onChangeEmailHandle} />

                < label className={classes.checkbox}> Password</label>
                <Input color={isPasswordValid}
                    type="password"
                    onChange={onChangePasswordHandle} />

                <div className={classes.end}>
                    <label className={classes.checkbox}>
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </label>
                    <button className={classes.button} onClick={onClickHandleLogin} disabled={isEmailValid === 'f00' || isPasswordValid === 'f00'}>Login</button>
                </div>

            </span>
        </div >}
    </>
}

export default Login;