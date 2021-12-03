import React from "react";
import CategoryItem from "./CategoryItem";
import Categories from '../../assets/js/Categories'
import classes from '../../assets/CSS/Category.module.css'

const Category = props => {
    return <>
        <div className={classes.container}>
            {Categories.map(item =>
                <CategoryItem item={item} />
            )}
        </div>
    </>
}

export default Category;