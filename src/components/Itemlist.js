import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ data }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    //dispacth an action
    const action = addItems(item); 
    dispatch(action);
    //dispatch(addItems("pizza"))
  }



  return (
    <div className="flex items-start justify-between gap-4 p-4 border-b">
      {/* left: Image */}
      {data.imageId && (
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${data.imageId}`}
          alt={data.name}
          className="w-40 h-40 rounded-lg object-cover"
        />
      )}

      {/* right: Name + Description + Price + Button */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <p className="text-gray-600 text-sm my-1">{data.description}</p>
        <p className="text-md font-medium mt-1">
          ₹{data.price ? data.price / 100 : data.defaultPrice / 100}
        </p>

        <button className="mt-2 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-green-600 transition"
        onClick={() => handleAddItem(data)}>
          Let'sEat
        </button>
      </div>
    </div>
  );
};

export default ItemList;
