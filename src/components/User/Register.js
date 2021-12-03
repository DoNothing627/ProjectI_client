import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import React, { useState } from "react";
import classes from '../../assets/CSS/Login.module.css'
import backGroundImage from '../../assets/image/background/2.jpg'
import styled from 'styled-components'
import axios from "axios";

const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom:1px solid #${(props) => props.color};
    width: 80%;
    padding: 10px 10px;
    margin-left: 20px;
`;

const Register = props => {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState('000')
    const [isPasswordValid, setIsPasswordValid] = useState('000')
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState('000')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const onChangeEmailHandle = event => {
        setEnteredEmail(event.target.value);
        if (event.target.value.includes('@') == false) setIsEmailValid('f00')
        else setIsEmailValid('000')
    }

    const onChangePasswordHandle = event => {
        setEnteredPassword(event.target.value)
        if (event.target.value.trim().length < 6) setIsPasswordValid('f00')
        else setIsPasswordValid('000')
    }

    const onChangeConfirmPasswordHandle = event => {
        setEnteredConfirmPassword(event.target.value)
        if (event.target.value != enteredPassword || isPasswordValid === 'f00') setIsConfirmPasswordValid('f00')
        else setIsConfirmPasswordValid('000')
    }

    const onChangePhoneNumberHandle = event => {
        setPhoneNumber(event.target.value)
    }

    const onChangeAddressHandle = event => {
        setAddress(event.target.value)
    }


    const onClickRegister = async () => {
        const data = {
            userName: enteredEmail,
            passWord: enteredPassword,
            phoneNumber: phoneNumber,
            address: address
        }
        const res = await axios.post('http://127.0.0.1:8080/user/register', data)
        console.log(res)
        if (res.data === true) {
            props.onClickHandleOff()
        }
        else alert("Email hoặc số điện thoại đã tồn tại")
    }

    return <>

        <div className={classes.container}>
            <span className={classes.info}>
                <img className={classes.girl} src={backGroundImage} />
                <div className={classes.desc}>
                    <div className={classes.big}>SIGN UP FOR FREE.</div>
                    <div className={classes.small}>
                        <p>Sign up with social media</p>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </span>
            <span className={classes.main_function}>
                <div className={classes.rebig}>Register</div>
                <div className={classes.resmall}>
                    <div>You have an account?</div>
                    <a className={classes.a} onClick={props.onClickHandleOff}> Login your account</a>
                    <div>, it takes less than a minute</div>
                </div>
                <label className={classes.checkbox}> Email</label>
                <Input color={isEmailValid}
                    type="email"
                    onChange={onChangeEmailHandle} />

                <label className={classes.checkbox}> Phone Number</label>
                <input className={classes.input} onChange={onChangePhoneNumberHandle} />

                <label className={classes.checkbox}> Address</label>
                <input className={classes.input} onChange={onChangeAddressHandle} />

                <label className={classes.checkbox}> Password</label>
                <Input color={isPasswordValid}
                    type="password"
                    onChange={onChangePasswordHandle} />

                <label className={classes.checkbox}> Confirm your password</label>
                <Input color={isConfirmPasswordValid}
                    type="password"
                    onChange={onChangeConfirmPasswordHandle} />

                <div className={classes.end}>
                    <div className={classes.checkbox} />
                    <button className={classes.register}
                        disabled={isEmailValid === 'f00' || isPasswordValid === 'f00' || isConfirmPasswordValid === 'f00'}
                        onClick={onClickRegister}>Register</button>
                </div>

            </span>
        </div>
    </>
}

export default Register;