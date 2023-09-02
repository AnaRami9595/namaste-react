import { CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime } = resData?.data

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <strong>{name}</strong>
            <li>{cuisines.join(", ")} </li>
            <li>{deliveryTime} </li>
            <li>{costForTwo / 10}</li>
            <li>{avgRating}</li>
        </div>
    );
}

export default RestaurantCard;