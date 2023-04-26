import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [isItemAddedToCart, setIsItemAddedToCart] = useState(false);
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;
    const numberOfCartItem = items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);


    useEffect(() => {
        if(items.length === 0 ) {
            return;
        }
        setIsItemAddedToCart(true);
        const addItemTimeOut = setTimeout(() => {
            setIsItemAddedToCart(false);
        },300);

        return () => {
            clearTimeout(addItemTimeOut);
        };
    },[items]);

    const btnClasses = `${classes.button} ${isItemAddedToCart ? classes.bump : ''}`
    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};

export default HeaderCartButton;