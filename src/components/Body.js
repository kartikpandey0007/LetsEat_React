import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurnts, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStaus = useOnlineStatus();
  if (onlineStaus === false)
    return (
      <h1 className="text-center text-xl text-red-600 font-semibold mt-10">
        🚫 Looks like you are offline
      </h1>
    );

    const {loggedInUser,setUserInfo} = useContext(UserContext)// for reactcontext(fo globaly present variable change)

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-4 md:px-10 lg:px-20 py-6">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search restaurant"
            className="border border-gray-300 rounded px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          🌟 Top Rated Restaurants
        </button>

        <div>
          <label>UserName: </label>
          <input className="border border-gray-300 rounded px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-pink-300" 
          value={loggedInUser}
          onChange={(e)=>{setUserInfo(e.target.value)}}></input>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurnts?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
