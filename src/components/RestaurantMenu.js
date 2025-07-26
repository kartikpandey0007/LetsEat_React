import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center">{name}</h1>
      <h3 className="text-lg text-gray-600 text-center">{cuisines?.join(", ")}</h3>
      <h3 className="text-md text-gray-500 text-center mb-6">{costForTwoMessage}</h3>

      {itemCards?.length > 0 ? (
        <ul className="space-y-6">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-xl p-4 gap-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                className="w-40 h-40 object-cover rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
              <div className="flex-1">
                <div className="text-xl font-semibold">{item.card.info.name}</div>
                <div className="text-green-700 font-medium mt-1">₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {item.card.info.description || "No description available."}
                </p>
                <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No menu available for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
