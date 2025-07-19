import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  /*let listOfRestaurants = [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "967051",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/6b40cfcf-8901-49c9-af50-f44066d319d4_967051.JPG",
        locality: "Omaxe Mall",
        areaName: "Chandni Chowk",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 3.8,
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "213",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "804724",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9dbea919-e4a4-4a05-9708-0476ad6dbf35_804724.JPG",
        locality: "Kaccha Bagh",
        areaName: "Chandni Chowk",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
        avgRating: 4.8,
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "111",
        sla: {
          deliveryTime: 45,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ];*/

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
