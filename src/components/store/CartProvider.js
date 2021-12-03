import React, { useReducer } from "react";
import CartContex from './cart-context'

var defaultCart
if (JSON.parse(localStorage.getItem('Cart') === null)) {
    defaultCart = {
        items: [],
        totalAmount: 0
    }
} else defaultCart = JSON.parse(localStorage.getItem('Cart'))

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.company * action.item.amount;

        const isExistedIndex = state.items.findIndex((item) => item.number === action.item.number);
        const itemExisted = state.items[isExistedIndex];

        let updatedItem

        if (itemExisted) {
            const newItem = {
                ...itemExisted,
                amount: itemExisted.amount + action.item.amount
            }
            updatedItem = [...state.items]
            updatedItem[isExistedIndex] = newItem
        } else {
            updatedItem = state.items.concat(action.item);
        }

        localStorage.setItem('Cart', JSON.stringify({
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }))
        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE') {
        const isExistedIndex = state.items.findIndex((item) => item.number === action.number);
        const itemExisted = state.items[isExistedIndex];
        const updatedTotalAmount = state.totalAmount - itemExisted.company;
        let updatedItem
        const newItem = {
            ...itemExisted,
            amount: itemExisted.amount - 1
        }

        if (newItem.amount === 0) {
            updatedItem = state.items.filter(item => item.number != action.number)
        } else {
            updatedItem = [...state.items]
            updatedItem[isExistedIndex] = newItem
        }

        localStorage.setItem('Cart', JSON.stringify({
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }))

        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVEALL') {
        localStorage.removeItem('Cart')
    }

    return defaultCart;
}

const CartProvider = props => {
    const [cart, dispatch] = useReducer(cartReducer, defaultCart)

    console.log(defaultCart)
    const addItemHandle = item => {
        dispatch({ type: "ADD", item: item })
    }

    const removeItemHandle = number => {
        dispatch({ type: "REMOVE", number: number })
    }

    const removeAllItemHandle = () => {
        dispatch({ type: "REMOVEALL" })
    }

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: addItemHandle,
        removeItem: removeItemHandle,
        removeAllItem: removeAllItemHandle
    }

    return (<CartContex.Provider value={cartContext}>
        {props.children}
    </CartContex.Provider>)
}

export default CartProvider