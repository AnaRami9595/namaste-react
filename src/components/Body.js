import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus"
import { DATA_API } from "../../utils/constants";


const Body = () => {



    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const data = await fetch(DATA_API);
        const json = await data.json();
        setListOfRestaurants(json);
        setFilteredRestaurants(json);
    };


    const onlineStatus = useOnlineStatus()

    if (!onlineStatus) {
        return (
            <h1>Looks like you're offline 😬</h1>
        )
    }


    return !listOfRestaurants.length ? <Shimmer /> : (
        <div className="body">
            <div className="banner 
            flex flex-col flex-wrap
            justify-center 
            items-center
            bg-[url('./images/search-background.jpg')] 
            bg-center bg-cover
            z-10 h-80
            my-2">
                <h2 className="text-white text-4xl font-semibold
                my-8
                [text-shadow:_0_2.5px_0_rgb(0_0_0_/_50%)]">What are you craving?</h2>
                <div className="search">
                    <input className="rounded-sm p-1 w-60"
                        type="text" placeholder="Type a meal..."
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }}
                    />
                    <button className="btn
                    text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                    mx-2"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(
                                    searchText.toLowerCase())
                            )
                            setFilteredRestaurants(filtered)
                        }}
                    > Search!</button>

                </div>
                <div className="filter-button">
                    <button
                        className="filter-btn
                        text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurants(filteredList)
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="res-container
            flex  flex-wrap justify-center
            ">
                {filteredRestaurants.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard
                            resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;



