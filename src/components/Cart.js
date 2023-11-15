import { useSelector } from "react-redux";
import CartItemsList from "../CartItemsList.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/redux/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button
                    className="p-2 my-4  bg-yellow-400
                 shadow-lg
                 font-bold
                mx-auto
                px-4
                rounded-lg
                "
                    onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty</h1>}
                <CartItemsList items={cartItems} />
            </div>

        </div>
    );
}

export default Cart;