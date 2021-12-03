import { ArrowBack, Forum, Healing, HourglassEmpty, LocationOnOutlined, ShoppingCart, StarBorder } from "@material-ui/icons";
import React, { useContext, useState, useEffect } from "react";
import classes from "../../assets/CSS/Product.module.css"
import { useParams } from "react-router";
import CartContext from "../store/cart-context";
import Blank from "../UI/Blank";

const Product = props => {

    const params = useParams();
    const productid = params.productid.replace(':', '')
    const [item, setItem] = useState({})
    const [amount, setAmount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const cartCtx = useContext(CartContext)

    useEffect(async () => {
        setIsLoading(true)
        const response = await fetch('http://127.0.0.1:8080/product/get')
        const data = await response.json()
        setItem(data[productid])
        setIsLoading(false)
    }, [])

    console.log(productid)
    function add() {
        setAmount(amount + 1);
    }

    function remove() {
        if (amount > 0) setAmount(amount - 1);
    }

    const addToCartHandle = () => {
        cartCtx.addItem({
            number: item.number,
            name: item.name,
            img: item.img,
            company: item.company,
            amount: amount
        })
        setAmount(0)
    }

    return <>
        {isLoading == true && <Blank />}
        {isLoading == false &&
            <div><div className={classes.container}>
                <div className={classes.img}>
                    <img className={classes.image} src={item.img} />
                </div>

                <div className={classes.info}>
                    <h1>{item.name} </h1>
                    <h2 className={classes.cost}>${item.company}</h2>
                    <h3 className={classes.des}>
                        {item.des}
                    </h3>
                    <div className={classes.tocart}>
                        <button className={classes.button} onClick={remove}>-</button>
                        <div className={classes.amount}>{amount}</div>
                        <button className={classes.button} onClick={add}>+</button>
                        <button className={classes.cart} onClick={addToCartHandle}>
                            <ShoppingCart />
                            Add To Cart
                        </button>
                    </div>

                </div>
            </div>
                <div className={classes.sources}>
                    <div className={classes.feature}>
                        <div className={classes.group}>
                            <LocationOnOutlined className={classes.icon} />
                            <h3 className={classes.letter}>{item.ORIGIN}</h3>
                        </div>
                        <div className={classes.group}>
                            <Forum className={classes.icon} />
                            <h3 className={classes.letter}>{item.MATERIALS}</h3>
                        </div>
                        <div className={classes.group}>
                            <HourglassEmpty className={classes.icon} />
                            <h3 className={classes.letter}>{item.END_OF_LIFE}</h3>
                        </div>

                    </div>
                    <div className={classes.spec}>
                        <div className={classes.group}>
                            <Healing className={classes.icon} />
                            <h3 className={classes.letter}>{item.PRODUCT_CARE}</h3>
                        </div>
                        <div className={classes.group}>
                            <StarBorder className={classes.icon} />
                            <h3 className={classes.letter}>{item.ADDITIONAL_FEATURES}</h3>
                        </div>
                        <div className={classes.group}>
                            <ArrowBack className={classes.icon} />
                            <h3 className={classes.letter}>{item.RETURNS}</h3>
                        </div>
                    </div>
                </div>
            </div>}
    </>
}

export default Product;