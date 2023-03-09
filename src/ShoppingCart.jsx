import ShoppingCartItems from "./ShoppingCartItems";
import TotalProductsCount from "./TotalProductsCount";
import TotalPrice from "./TotalPrice";


const ShoppingCart = () => {
    return (
        <>
            <ShoppingCartItems />
            <TotalProductsCount />
            <br></br>
            <TotalPrice />
        </>
    )
}

export default ShoppingCart;