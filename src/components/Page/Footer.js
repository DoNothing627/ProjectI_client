import { Facebook, Instagram, LocationOn, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import classes from '../../assets/CSS/Footer.module.css'

const Footer = props => {
    return <>
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.box}>
                    <h2>Contact us</h2>
                    <div className={classes.flex}>
                        <p>Email: </p><a className={classes.a} href=""><p>andxh58chn@gmail.com</p></a>
                    </div>
                    <p>Call us: 0949215695</p>
                    <div className={classes.icons}>
                        <span className={classes.icon}><Facebook /></span>
                        <span className={classes.icon}><Instagram /></span>
                        <span className={classes.icon}><Twitter /></span>
                        <span className={classes.icon}><YouTube /></span>
                    </div>
                </div>
                <div className={classes.box}>
                    <h2>About Peach</h2>
                    <p>Careers</p>
                    <p>Privacy Commitment</p>
                    <p>Unequal is Unacceptable</p>

                </div>
                <div className={classes.box}>
                    <h2>Sign Up & Save 10% on Your Purchase</h2>
                    <p>Subscribe for news on our latest arrivals, exclusive promotions and events.</p>
                    <button className={classes.button}><h4>Get Your 10% Off</h4></button>
                </div>
            </div>

            <div className={classes.box}>
                <h2>Peach</h2>
                <p>California, UK & Australia Supply Chain Disclosure    |     Privacy Policy    |      Interest Based Ads      |     Do Not Sell My Personal Information      |      Terms & Conditions</p>
                <p>Web ID: 261546451|Copyright © 2021 Peach. All rights reserved.</p>
                <div className={classes.location}>
                    <span><LocationOn /></span>
                    <span><p>Hanoi-VietNam</p></span>
                </div>
            </div>
        </div>
    </>
}

export default Footer;