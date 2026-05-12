import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import styles from './cartIcon.module.css';
import {
    removeFromCart,
    increase,
    decrease
} from '../../slices/cartSlice';
import { useState } from "react";
import shoppingCart from '../../assets/shopping-cart.png'


const CartBar = () => {

    const [isOpen, setIsopen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsopen(true)
    };
    const handleClose = () => setIsopen(false);


    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div className={styles.cartWrapper}>
                {items.length > 0 ?
                    <div className={styles.badge}>
                        {items.reduce((acc,item)=> acc + item.quantity, 0)}
                    </div>
                    : null}

                <img
                    src={shoppingCart}
                    onClick={handleOpen}
                    className={styles.cartImage}
                />
            </div>

            {isOpen && (
                <div
                    className={styles.backdrop}
                    onClick={handleClose}
                />
            )}


            {isOpen && (
                <div className={styles.container}>

                    <h2>Cart</h2>

                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            Cart is empty
                        </div>
                    ) : (
                        items.map(item => (
                            <div
                                key={item.id}
                                className={styles.item}
                            >
                                <img
                                    src={item.image}
                                    className={styles.itemImage}
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
                                            onClick={() => dispatch(decrease(item))}
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => dispatch(increase(item))}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => dispatch(removeFromCart(item))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}


        </Fragment>
    )
}
export default CartBar