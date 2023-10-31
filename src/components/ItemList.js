import { CDN_URL } from "../../utils/constants"
import noImageThumb from "../../images/noimagethumb.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/redux/cartSlice";

const ItemList = (props) => {

    const { items } = props
    console.log('items', items)


    const { imageId, name, description, price, ratings } = items?.card?.info
    const { rating, ratingCountV2 } = ratings?.aggregatedRating

    const image = CDN_URL + imageId

    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        //dispath an action'
        dispatch(addItem(item));
        //whatever is the argument of our action addItem, will be our PAYLOAD,
        //This will create an obj for the action, with the property payload
        //wich value will be the arg.
        //this arg will be accesed inside our cart slice
    }

    return (
        <div
            className="p-2 m-2 
             bg-slate-50 rounded-lg 
            border-b-2 
            flex
            w-8/12 
            my-4 mx-auto
            ">
            <div className="rounded-lg  w-4/12 p-2">
                <div className="absolute">
                    <button className="p-2 mx-1  bg-gray-900
                text-white
                 shadow-lg
                m-auto
                rounded-lg
                " onClick={() => handleAddItem(items)}> Add +
                    </button>
                </div>

                <img
                    src={image || noImageThumb}
                    alt="Photo of the Item"
                />

            </div>

            <ul className="py-2">
                <li className="font-semibold">{name}</li>
                <li className=""> - ₹ {price}</li>
                <li className="text-gray-500 text-sm">{description}</li>
                <span className="text-xs font-bold">⭐{rating}</span> <span className="text-xs"> of <span className="font-semibold">{ratingCountV2}</span> ratings</span>
            </ul>
        </div>

    );
}

export default ItemList;