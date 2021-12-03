import React from "react";
import Body from "./Body";
import Category from "./Category";
import Footer from "./Footer";
import Navigation from "./Navigation";


const MainPage = props => {
    localStorage.setItem('currentPage', 0)
    return <>
        <Body />
        <Category />
    </>
}

export default MainPage;