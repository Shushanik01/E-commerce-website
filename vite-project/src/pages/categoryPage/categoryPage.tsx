import { useSelector, useDispatch } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { fetchProducts } from "../../slices/productSlice";
import styles from './style.module.css';
import { addToCart } from "../../slices/cartSlice";

const CategoryPage = ({ category }: { category: string }) => {

    const items = useSelector((state: RootState) => state.products.data)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (items.length === 0) dispatch(fetchProducts())
    }, []);

    return (
        <div className={styles.container}>
            {items
                .filter(item => item.category === category)
                .map(item => (
                    <div key={item.id}
                        className={styles.card}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.image}
                        />

                        <h2 className={styles.title}>
                            {item.title}
                        </h2>

                        <p className={styles.price}>
                            ${item.price}
                        </p>

                        <span className={styles.description}>
                            {item.description}
                        </span>

                        <p className={styles.category}>
                            {item.category}
                        </p>
                        <button
                            className={styles.add}
                            onClick={() => dispatch(addToCart(item))}
                        >Add to cart</button>
                        <div className={styles.rating}>
                            <p>⭐ {item.rating.rate}</p>
                            <p>🛒 {item.rating.count}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default CategoryPage