import { Fragment } from "react/jsx-runtime";
import styles from './product.module.css';
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../slices/productSlice";
import { addToCart } from "../../slices/cartSlice";
import CartBar from "../../components/cartIcon/cartBar";


const Products = ()=>{

    const data = useSelector((state:RootState)=> state.products.data);
    const error = useSelector((state:RootState) => state.products.error);
    const loading = useSelector((state: RootState)=> state.products.loading)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

 return (
        <Fragment>
        {error ? (
        <span className={styles.error}>{error}</span>
    ) : null}

    {loading ? (
        <span className={styles.loading}>Loading...</span>
    ) : (
        <div className={styles.container}>
            {data?.map(item => (
                <div
                    key={item.id}
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
                    onClick={()=>dispatch(addToCart(item))}
                    >Add to cart</button>
                    <div className={styles.rating}>
                        <p>⭐ {item.rating.rate}</p>
                        <p>🛒 {item.rating.count}</p>
                    </div>
                </div>
            ))}
            <CartBar/>
        </div>
    )}
           
        </Fragment>
    )


}
export default Products