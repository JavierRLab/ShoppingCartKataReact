import ProductList from './ProductList';
import AddProductButton from './AddProductButton';

const AddProductForm = () => {
    return (
        <form className="form__products">
            <ProductList />
            <AddProductButton />
        </form>
    )
}

export default AddProductForm;