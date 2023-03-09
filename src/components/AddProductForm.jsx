import { useEffect, useState } from 'react';
import { addItem, getAvailableProducts } from '../services/ShoppingCartAPIService';

const AddProductForm = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getAvailableProducts())
    }, [])


    function handleOnSubmit(event) {
        event.preventDefault();
        const productName = event.currentTarget.elements.productName.value;
        addItem(productName);
        props.onAddProduct();
    }

    return (
        <form className="form__products"
            onSubmit={handleOnSubmit}
        >
            <label htmlFor="productName">Choose product from list</label>
            <select id="productName">
                {items.map((item) => (
                    <option key={item.name} value={item.name}>
                        {`${item.name} ${item.price}`}
                    </option>
                ))}
            </select>
            <button>Add product</button>
        </form>
    )
}

export default AddProductForm;