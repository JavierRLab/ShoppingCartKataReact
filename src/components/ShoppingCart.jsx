import { getItems, getShoppingCart } from "../services/ShoppingCartAPIService";

const ShoppingCart = () => {
    const shoppingCart = getShoppingCart();
    let cartProducts = shoppingCart.ShoppingCartProducts
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
                    <tr>
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
                    <td>{shoppingCart.TotalQuantity}</td>
                </tr>
                <tr>
                    <td>Total price</td>
                    <td>{shoppingCart.TotalPrice}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default ShoppingCart;