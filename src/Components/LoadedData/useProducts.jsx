import { useEffect, useState } from "react";



// const [products, setProducts] = useState([])
const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Our_Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return products;
}
export default useProducts;


