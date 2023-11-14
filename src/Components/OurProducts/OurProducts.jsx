import useProducts from "../LoadedData/useProducts";
import OurProduct from "./OurProduct";



const OurProducts = () => {
    const products = useProducts();
    console.log(products);


    return (
        <div>
            <div className='w-full h-96 bg-slate-500 relative '>
                <div className=''></div>
                <h1 className='absolute top-[50%] left-[50%] text-2xl'>Our Products</h1>
            </div>
            <div className="grid grid-cols-3 max-w-7xl m-auto gap-10">
                {
                    products.map(product => <OurProduct key={product.product_name} element={product}></OurProduct>)
                }
            </div>
        </div>
    );
};

export default OurProducts;