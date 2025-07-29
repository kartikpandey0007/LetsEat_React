import { useSelector } from "react-redux";
import ItemList from "./Itemlist";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    const action = clearCart();
    dispatch(action);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h1>

      {cartItems.map((item, index) => (
        <ItemList key={`${item.id}-${index}`} data={item} />
      ))}

      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 bg-red-700 text-white text-sm font-semibold rounded hover:bg-red-800 transition"
          onClick={handleClearCart}
        >
          Clear Cart🧹
        </button>
      </div>
    </div>
  );
};

export default Cart;
