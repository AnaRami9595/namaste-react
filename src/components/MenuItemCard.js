import { CDN_URL } from "../../utils/constants"
import noImageThumb from "../../images/noimagethumb.jpg";

const MenuItemCard = (props) => {
    const { menuItem } = props
    const { imageId, name, description, price, ratings } = menuItem?.card?.info
    const { rating, ratingCountV2 } = ratings?.aggregatedRating
    const { category } = menuItem

    const image = CDN_URL + imageId

    return (

        <div className="flex  p-4 m-4 bg-slate-50 rounded-lg
        h-44">
            <img
                className="rounded-lg w-44"
                src={image || noImageThumb}
                alt="Photo of the Item"
            />
            <ul className="px-4 mx-4">
                <li className="text-green-400 text-xs">{category}</li>
                <li className="font-semibold">{name}</li>
                <li className="text-gray-500 text-sm">{description}</li>
                <li className="text-sm">₹{price}</li>
                <span className="text-xs font-bold">⭐{rating}</span> <span className="text-xs"> of <span className="font-semibold">{ratingCountV2}</span> ratings</span>

            </ul>



        </div>



    );
}

export default MenuItemCard;