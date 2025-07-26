import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  
  /*useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}`
      );
      const json = await data.json();
      setResInfo(json?.data);
    })();
  }, []);*/

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      {itemCards?.length > 0 ? (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="menu-item">
              <img
                className="dish-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
              <div className="dish-text">
                <strong>{item.card.info.name}</strong> - ₹
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
                <p style={{ margin: "8px 0", fontSize: "0.9rem", color: "#666" }}>
                  {item.card.info.description || "No description available."}
                </p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu available for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
