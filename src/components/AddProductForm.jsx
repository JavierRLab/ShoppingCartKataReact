import ProductList from './ProductList';

const AddProductForm = () => {
    return (
        <form className="form__products">
            <ProductList />
            <button>Add product</button>
        </form>
    )
}

export default AddProductForm;