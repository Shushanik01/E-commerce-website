import { useState, useEffect } from "react"

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const products = await fetch('https://fakestoreapi.com/products');
                if(!products.ok){
                    throw new Error('Something went wrong!')
                }
                const data = await products.json();
                setData(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
            fetchData()
    }, [])

    return { data, loading, error }

}
export default useFetch