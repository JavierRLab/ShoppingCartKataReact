import { getItems } from "../services/ShoppingCartAPIService";


const ProductList = () => {

    const items = getItems();

    return (
        <select>
            <option>Choose product from list</option>
            {items.map((item) => (
                <option key={item.name} value={item.name}>
                    {`${item.name} ${item.price}`}
                </option>
            ))}
        </select>
    );
};

export default ProductList;