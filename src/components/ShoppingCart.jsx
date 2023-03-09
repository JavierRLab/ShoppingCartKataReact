import { getShoppingCart } from "../services/ShoppingCartAPIService";

const ShoppingCart = (props) => {
    let cartProducts = Array.isArray(props.shoppingCart.ShoppingCartProducts) ? 
                                        props.shoppingCart.ShoppingCartProducts : [];
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.Product.Name}>
                        <td>{cartProduct.Product.Name}</td>
                        <td>{cartProduct.Product.FinalPrice}</td>
                        <td>{cartProduct.Quantity}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total products</td>
                    <td></td>
                    <td>{props.shoppingCart.TotalQuantity}</td>
                </tr>
                <tr>
                    <td>Total price</td>
                    <td>{props.shoppingCart.TotalPrice}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default ShoppingCart;