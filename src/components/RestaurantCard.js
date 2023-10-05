import { CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, cuisines } = resData?.info
    const { deliveryTime } = resData?.info.sla
    return (
        <div className="res-card w-[250px] p-4 m-4 
         bg-slate-50 
         rounded-lg">
            <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
            <strong className="py-2">{name}</strong>
            <li>{cuisines.join(", ")} </li>
            <li>Delivery time: {deliveryTime} minutes</li>
            <li>{avgRating} stars</li>
        </div>
    );
}

export default RestaurantCard;