import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="w-64 p-4 m-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-40 object-cover rounded-xl mb-2"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3 className="text-lg font-bold">{resData.name}</h3>
      <h4 className="text-sm text-gray-600">{resData.cuisines.join(", ")}</h4>
      <h4 className="text-sm text-green-600">⭐ {resData.avgRating}</h4>
      <h4 className="text-sm">{resData.costForTwo}</h4>
      <h4 className="text-sm text-gray-500">{resData.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
