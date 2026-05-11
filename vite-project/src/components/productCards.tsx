import { Fragment } from "react/jsx-runtime";
import useFetch from "../hooks/useFetch";
import styles from './productCrads.module.css';


const ProductCards = () => {

    const { data, loading, error } = useFetch()

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
export default ProductCards