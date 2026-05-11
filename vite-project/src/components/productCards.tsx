import useFetch from "../hooks/useFetch";
import styles from './productCrads.module.css';


const ProductCards = () => {

    const { data, loading, error } = useFetch()

    return (
        <>
        {error ? <span>{error}</span> : null}
        {loading ? <span>Loading...</span> :  <div>
                {data?.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p> {item.price} </p>
                        <span> {item.description} </span>
                        <p> {item.category} </p>
                        <img src={item.image} />
                        <p>{item.rating.rate}</p>
                        <p>{item.rating.count}</p>
                    </div>
                ))}
            </div>}
           
        </>
    )

}
export default ProductCards