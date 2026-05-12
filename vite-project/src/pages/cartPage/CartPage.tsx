import { Fragment } from "react/jsx-runtime";
import styles from './cart.module.css';
import { useSelector, useDispatch } from "react-redux";
import type {RootState} from '../../store/store';
import { removeFromCart, increase, decrease } from "../../slices/cartSlice";
import { useEffect } from "react";

const CartPage = ()=>{

    const items = useSelector((state:RootState) => state.cart.items);

    const dispatch = useDispatch();


    return(
        <Fragment>
            <div className={styles.cartContainer}>
    <h1 className={styles.cartTitle}>
        Shopping Cart
    </h1>

    <div className={styles.cartList}>
        {items.map(item => (
            <div className={styles.cartItem}>
                
                <img
                    src={item.image}
                    className={styles.image}
                />

                <div className={styles.info}>
                    <h2 className={styles.title}>
                        {item.title}
                    </h2>

                    <p className={styles.category}>
                        {item.category}
                    </p>

                    <p className={styles.price}>
                        ${item.price}
                    </p>

                    <div className={styles.controls}>
                        <button
                        onClick={()=>dispatch(decrease(item))}
                        >-</button>

                        <span>
                            {item.quantity}
                        </span>

                        <button
                        onClick={()=> dispatch(increase(item))}
                        >+</button>
                    </div>

                    <button
                    onClick={()=> dispatch(removeFromCart(item))}
                    >
                        Remove
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>
        </Fragment>
    )
}
export default CartPage