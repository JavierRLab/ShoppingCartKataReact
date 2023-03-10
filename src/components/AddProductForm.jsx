import { useEffect, useState } from 'react';
import { addItem, getAvailableProducts } from '../services/ShoppingCartAPIService';

const AddProductForm = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getAvailableProducts()
            .then(products => setItems(products));
    }, [])

    function handleOnSubmit(event) {
        event.preventDefault();
        const productName = event.currentTarget.elements.productName.value;
        addItem(productName)
            .then(_ => props.onAddProduct())
    }

    return (
        <form className="form__products"
            onSubmit={handleOnSubmit}
        >
            <label htmlFor="productName">Choose product from list</label>
            <select id="productName">
                {items.map((item) => (
                    <option key={item.Name} value={item.Name}>
                        {`${item.Name} ${item.Price}`}
                    </option>
                ))}
            </select>
            <button>Add product</button>
        </form>
    )
}

export default AddProductForm;