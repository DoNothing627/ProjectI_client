import React, { useState, useContext } from "react";
import Button from "../../UI/Button";
import CartContext from "../../store/cart-context";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const CartButton = props => {

    const cartCtx = useContext(CartContext)
    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)
    return <>
        <Button>
            <Badge badgeContent={numberOfCartItem} color={"secondary"}>
                {/* <div className={classes.icon}><CartIcon /></div> */}
                <ShoppingCart />
            </Badge>

        </Button>
    </>
}

export default CartButton;