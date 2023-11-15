import { CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    
    if (!resData || !resData.info) {
        return null; // Handle the case when data is not available
    }

    const { cloudinaryImageId, name, avgRating, cuisines } = resData.info;
    const { deliveryTime } = resData.info.sla;
    
    return (
        <div 
        data-testid = "resCard"
        className="res-card w-[250px] p-4 m-4 
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

//Higher order component here:
//input: RestaurantCard.js
//output: a new component RestaurantCardPromoted:

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute left-7
                 bg-gray-900
                p-1 m-1no
                rounded-sm 
                text-xs text-white
                font-semibold">
                    Promoted </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;