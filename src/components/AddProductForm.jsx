import { useEffect, useState } from 'react';
import { getItems } from '../services/ShoppingCartAPIService';

const AddProductForm = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [])


    return (
        <form className="form__products">
            <select id="productName">
                <option>Choose product from list</option>
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