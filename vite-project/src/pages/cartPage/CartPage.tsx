import { Fragment } from "react/jsx-runtime";
import styles from './cart.module.css';
import { useSelector } from "react-redux";
import type {RootState} from '../../store/store'

const CartPage = ()=>{

    const items = useSelector((state:RootState) => state.cart.items)

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
                        <button>-</button>

                        <span>
                            {item.quantity}
                        </span>

                        <button>+</button>
                    </div>

                    <button>
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