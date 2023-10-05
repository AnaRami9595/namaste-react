import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import MenuItemCard from "./MenuItemCard";


const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, cost, avgRating, sla } = resInfo?.info;

    const { foodOptions } = resInfo
    const { deliveryTime } = sla


    return (
        <div className="hey">
            <div className="mx-28 p-4 flex justify-between ">
                <div>
                    <h1 className="font-bold text-lg">{name}</h1>
                    <h1 className="text-gray-500 text-sm">{cuisines.join(", ")}</h1>
                </div>

                <div className="flex flex-wrap 
                w-20
                p-1.5
                 bg-slate-100 
                justify-center
                border-1.5">
                    <p className="text-sm border-b-2 font-bold">⭐{avgRating}</p>
                    <p className="text-xs">⏲️{deliveryTime} min.</p>

                </div>


            </div>


            <hr></hr>
            <div className="menuContainer flex  
            flex-col
            mx-28 
            justify-center"
            >
                {
                    foodOptions.map(item => (
                        <MenuItemCard key={item.card.info.id}
                            menuItem={item} />
                    ))}
            </div>

        </div>
    )
}

export default RestaurantMenu;