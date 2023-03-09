const ShoppingCartItems = () => {
    const cartItems = [
        { name: "Iceberg", price: "2.17 €", quantity: "1" },
        { name: "Tomato", price: "0.73 €", quantity: "1" }
    ];
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
            {cartItems.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                </tr>
            ))}
            </tbody>
        </table>
     );
}
 
export default ShoppingCartItems;