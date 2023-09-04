import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData()

    }, [])


    const fetchData = async () => {
        const data = await fetch(
            "http://localhost:3000/hotels");
        const json = await data.json();
        setListOfRestaurants(json);
        setFilteredRestaurants(json);
    };


    return !listOfRestaurants.length ? <Shimmer /> : (
        <div className="body">
            <div className="banner">
                <h2>What are you craving?</h2>
                <div className="search">
                    <input type="text" placeholder="Type a meal..."
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }}
                    />
                    <button className="btn"
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
                        className="filter-btn"
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

            <div className="res-container">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id}
                        resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;



