import { useState, useEffect } from "react"
import type { productData } from "../types/product";

const useFetch = () => {
    const [data, setData] = useState<productData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


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
                console.log(data);
                
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
            fetchData()
    }, [])

    return { data , loading, error }

}
export default useFetch