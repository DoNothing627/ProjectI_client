import React from "react";
import classes from '../../assets/CSS/Profile.module.css'

const Profile = props => {
    const logOut = () => {
        localStorage.setItem('jwt', '')
        props.onTurnOffProfile()
    }
    return <>
        <div className={classes.backdrop} onClick={props.onTurnOffProfile} />
        <div className={classes.container}>
            <h2 className={classes.big}>Email</h2>
            <h3 className={classes.small}>{props.user.userName}</h3>
            <h2 className={classes.big}>Phone number</h2>
            <h3 className={classes.small}>{props.user.phoneNumber}</h3>
            <h2 className={classes.big}>Address</h2>
            <h3 className={classes.small}>{props.user.address}</h3>

            <button className={classes.btn} onClick={logOut}> Logout </button>
        </div>
    </>
}

export default Profile;