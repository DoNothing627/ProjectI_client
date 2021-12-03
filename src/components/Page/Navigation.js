import React, { useState } from "react";
import ProductButton from "./navigation/ProductButton";
import ProfileButton from "./navigation/ProfileButton";
import CartButton from "./navigation/CartButton";
import Anoument from "./Anoument";
import classes from "../../assets/CSS/Navigation.module.css"
import { Search } from "@material-ui/icons";
import { Link } from 'react-router-dom'
import Button from "../UI/Button";

const Navigation = props => {
    var [enteredCategory, setEnteredCategory] = useState('')

    const getCategory = () => {
        var e = document.getElementById("id");
        if (e.options[e.selectedIndex].text === "Clothing") setEnteredCategory('clothing')
        if (e.options[e.selectedIndex].text === "Beauty & Care") setEnteredCategory('beutyandcare')
        if (e.options[e.selectedIndex].text === "Audio & Tech") setEnteredCategory('audioandtech')
        if (e.options[e.selectedIndex].text === "Lunch") setEnteredCategory('lunch')
        if (e.options[e.selectedIndex].text === "Toys") setEnteredCategory('toys')
    }

    return <>
        <Anoument />
        <div className={classes.container}>
            <span className={classes.search}>
                EN
                <select className={classes.input} id="id" onChange={getCategory}>
                    <option />
                    <option>Clothing</option>
                    <option>Audio & Tech</option>
                    <option>Beauty & Care</option>
                    <option>Lunch</option>
                    <option>Toys</option>
                </select>
                <Link to={`products/${enteredCategory}`} >
                    <button className={classes.btn}><Search /></button>
                </Link>
            </span>
            <Link to='/' ><Button className={classes.title} >PEACH.</Button></Link>
            <span className={classes.buttons}>
                <Link to='/products'><ProductButton /></Link>
                <span onClick={props.onProfileClickHandle} ><ProfileButton /></span>
                <span onClick={props.onCartClickHandle}><CartButton /></span>
            </span>
        </div>
    </>
}

export default Navigation;