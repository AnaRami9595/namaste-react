import { CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, cuisines } = resData?.info
    const { deliveryTime } = resData?.info.sla
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <strong>{name}</strong>
            <li>{cuisines.join(", ")} </li>
            <li>Delivery time: {deliveryTime} minutes</li>
            <li>{avgRating} stars</li>
        </div>
    );
}

export default RestaurantCard;