

const OurProduct = ({ element }) => {
    const { product_name, rating, price, type, brand, image } = element
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border border-black">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{price}</p>
                    <p>Brand : {brand}</p>
                    <p>{type}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;