import React, { useEffect, useState } from "react";
import classes from '../../assets/CSS/Products.module.css'
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Blank from "../UI/Blank";
import { Link, useParams } from "react-router-dom";

const Back = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(63, 63, 63, 0.7);
    z-index: 2;
    position: absolute;
`;


const Product = styled.div`
    width: 30%;
    float: left;
    margin-left: 20px;
    margin-top: 40px ;
    height: 65vh;
    background-color: azure;
    position: relative;
    &:hover ${Back}{
        opacity: 0.7;
    }
`;


const Products = props => {
    const localPage = localStorage.getItem('currentPage')
    const [currentPage, setCurrentPage] = useState(0);
    const category = useParams().category
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setCurrentPage(localPage)
    }, [])

    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8080/product/get')
        const data = await response.json()
        setProduct(data)
        setIsLoading(false)
    }, [])


    var filterProduct = product.filter(item => item)


    if (category !== undefined) {
        category.replace(':', '')
        filterProduct = product.filter(item => item.category === category)
    }

    filterProduct.sort(function (a, b) {
        return a.company - b.company
    })

    const handlePageClick = (event) => {
        console.log(event.selected)
        setCurrentPage(event.selected)
        localStorage.setItem('currentPage', event.selected)
    }

    var pageCount = filterProduct.length / 12;
    var finalProduct = filterProduct.slice(currentPage * 11, currentPage * 11 + 12);
    return <>
        {isLoading == true && <Blank />}
        {isLoading == false && <div>
            <div className={classes.container}>
                {finalProduct.map(element =>
                    <Product>
                        <Back>
                            <Link to={`/product/:${element.number}`}>
                                <button className={classes.button}>SEE MORE</button>
                            </Link>
                        </Back>
                        <img className={classes.img} src={element.img} />
                        <div className={classes.info}>
                            <h3 className={classes.name}>
                                {element.name}
                            </h3>
                        </div>

                    </Product>
                )}
            </div>

            <ReactPaginate className={classes.paginate}
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                activeClassName={classes.active}
            />
        </div>}
    </>
}

export default Products;