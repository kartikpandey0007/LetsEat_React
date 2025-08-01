import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);//custom hook 

  const [showIndex, setShowIndex] = useState(0)

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  

  const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> 
      c?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center">{name}</h1>
      <h3 className="text-lg text-gray-600 text-center">
        {cuisines?.join(", ")}
      </h3>
      <h2 className="text-lg text-gray-600 text-center">
        {costForTwoMessage}
      </h2>

      {/* category accordiance*/}
     {categories.map((category,index) => (
  <RestaurantCategory
    key={category?.card?.card?.categoryId}
    data = {category?.card?.card}
    showItems = {index===showIndex ? true : false}
    setShowIndex={()=> setShowIndex(index)}
  />
))}

    </div>
  );
};

export default RestaurantMenu;
