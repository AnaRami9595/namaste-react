import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";


const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, avgRating, sla } = resInfo?.info;

    const { foodOptions } = resInfo
    const { deliveryTime } = sla

    const mappedOptions = {}

    foodOptions.forEach((o) => {

        const cat = o.category;

        if (mappedOptions[cat]) {
            mappedOptions[cat].push(o);
        }
        else {
            mappedOptions[cat] = [o];
        }
    })

    /*  const categoriesList = [];
    
    for (const [key, value] of Object.entries(mappedOptions)) {
         categoriesList.push(
             <RestaurantCategory
                 key={key}
                 data={key}
                 foodOptions={value}
                 showItems={showIndex === 0} // Only the first category will have showItems as true
             />
         );
     } */

    const categoriesList = Object.entries(mappedOptions).map(([
        key, value], index) => (
        <RestaurantCategory
            key={key}
            data={key}
            foodOptions={value}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
        />
    ));


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
            <div className=""
            >
                {
                    categoriesList
                }

            </div>

        </div>
    )
}

export default RestaurantMenu;