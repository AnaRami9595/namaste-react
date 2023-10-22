import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {

    const { data, foodOptions, showItems, setShowIndex } = props

    const handleClick = () => {
        setShowIndex();
    }

    const itemsPerCategory = (data) => {
        let sum = 0;
        foodOptions.map(element => {
            if (element.category === data) {
                sum += 1
            }
        })
        return sum
    }

    const options = foodOptions
        .map((option, index) => (
            <ItemList key={index} items={option} />
        ));

    return (
        <div>
            {/*Header here*/}
            <div className="w-8/12 
            my-4 mx-auto
            bg-slate-200 p-4
            shadow-sm
            font-bold text-base"
            >
                <div className="
                flex
                justify-between
                cursor-pointer"
                    onClick={handleClick}
                >
                    <span>{data} ({itemsPerCategory(data)})</span>
                    <span>🔽</span>
                </div>

            </div>

            {
                showItems && options
            }
        </div>

    )
}

export default RestaurantCategory