import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
//const [showIndex,setShowIndex] = useState(true)
  const handleClick = () => {
    //setShowItems(!showItems); 
    setShowIndex()
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div
        className="my-4 bg-gray-100 hover:bg-gray-200 shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer transition"
        onClick={handleClick}
      >
        <span className="font-semibold text-xl text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="bg-white rounded-md shadow-sm">
          {data.itemCards.map((items) => (
            <Itemlist key={`${items.card.info.id}-${Math.random()}`} data={items.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
