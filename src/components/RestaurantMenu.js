import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams()
    console.log(resId)

    useEffect(() => { fetchMenu() }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json)
    }

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