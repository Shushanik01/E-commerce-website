import { Fragment } from "react/jsx-runtime";
import styles from './product.module.css';
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";


const Products = ()=>{

    const data = useSelector((state:RootState)=> state.products.data);
    const error = useSelector((state:RootState) => state.products.error);
    const loading = useSelector((state: RootState)=> state.products.loading)

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

                    <div className={styles.rating}>
                        <p>⭐ {item.rating.rate}</p>
                        <p>🛒 {item.rating.count}</p>
                    </div>
                </div>
            ))}
        </div>
    )}
           
        </Fragment>
    )


}
export default Products