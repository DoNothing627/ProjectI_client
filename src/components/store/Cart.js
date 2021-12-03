import React, { useContext, useState } from "react";
import CartContext from "./cart-context";
import classes from '../../assets/CSS/Profile.module.css'
import axios from "axios";


const Cart = props => {

    const [sendingMail, setSendingMail] = useState(0)
    const cartCtx = useContext(CartContext)

    const onAddItem = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const onRemoveItem = (id) => { cartCtx.removeItem(id) }

    const checkOut = async () => {
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }

        var emailSent = "";
        const cartCheckout = JSON.parse(localStorage.getItem('Cart'))
        cartCheckout.items.map(element =>
            emailSent = emailSent + "_Product: " + element.name + "-------Number: " + element.amount
        )

        const data = {
            email: localStorage.getItem('email'),
            order: emailSent
        }

        console.log(JSON.stringify(data))

        try {
            setSendingMail(1)
            const res = await axios.get("http://127.0.0.1:8080/user/checkout/" + JSON.stringify(data), config)
            alert('Đặt hàng thành công')
            props.onCartClickHandleOff()
            setSendingMail(0)
            cartCtx.removeAllItem()
        }
        catch {
            alert('Bạn chưa đăng nhập')
        }

    }

    return <>
        <div className={classes.backdrop} onClick={props.onCartClickHandleOff} />
        <div className={classes.container}>
            {cartCtx.items.map(item =>
                <div className={classes.item}>
                    <img src={item.img} />
                    <div className={classes.info}>
                        <h3>{item.name}</h3>
                        <div className={classes.amount}>
                            <h2>${item.company}</h2>
                            <button>x {item.amount}</button>
                        </div>
                    </div>
                    <div className={classes.fix}>
                        <button onClick={onRemoveItem.bind(null, item.number)}>-</button>
                        <button onClick={onAddItem.bind(null, item)}>+</button>
                    </div>
                </div>)
            }
            <div className={classes.cost}>Total: ${cartCtx.totalAmount}</div>
            <button className={classes.btn} onClick={checkOut} disabled={sendingMail}>Check out</button>
        </div>

    </>
}

export default Cart