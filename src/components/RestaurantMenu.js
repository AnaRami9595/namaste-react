import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, cost } = resInfo?.info;

    const { foodOptions } = resInfo


    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {cost} </h3>
            <h2>Menu</h2>
            <ul>
                {foodOptions.map((item) => <li key={item.card.info.id}>
                    {item.card.info.name} - ₹{item.card.info.price}</li>)}

            </ul>
        </div>)
}

export default RestaurantMenu;