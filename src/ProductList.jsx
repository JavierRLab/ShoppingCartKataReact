

const ProductList = () => {

    const products = [
        { name: "Iceberg", price: "2.17€" },
        { name: "Tomato", price: "0.73€" }
    ];

    return (
        <select>
            <option>Choose product from list</option>
            {products.map((product) => (
                <option key={product.name} value={product.name}>
                    {`${product.name} ${product.price}`}
                </option>
            ))}
        </select>
    );
};

export default ProductList;