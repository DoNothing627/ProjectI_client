import React from "react";
import classes from '../../assets/CSS/CategoryItem.module.css'
import { Link } from 'react-router-dom'

const CategoryItem = (props) => {

    return <>
        <div className={classes.container}>
            <img className={classes.img} src={props.item.img}></img>
            <div className={classes.info}>
                <div className={classes.title}>
                    {props.item.title}
                </div>
                <Link to={`${props.item.link}`}>
                    <button className={classes.button}>SHOP NOW</button>
                </Link>
            </div>

        </div>
    </>
}

export default CategoryItem;