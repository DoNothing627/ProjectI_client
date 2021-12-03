import React from "react";

var defaultCart = JSON.parse(localStorage.getItem('Cart'))
if (JSON.parse(localStorage.getItem('Cart') === null)) defaultCart = {
    items: [],
    totalAmount: 0
}


const CartContext = React.createContext({
    items: defaultCart.items,
    totalAmount: defaultCart.totalAmount,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default CartContext