import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../../utils/mockData"

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restList);
    const [input, setInput] = useState("Find restaurant...");
    const [filteredResults, setFilteredResults] = useState([]); // New state for filtered results


    const fetchD = (value) => {
        const results = restList.filter((res) => {
            return value && res.data.name && res.data.name.toLocaleLowerCase().includes(value.toLowerCase());
            //⬆️ Filter the results inside resList according to name
            //Use toLowerCase() for case-insensitive matching
        })
        return results
    }

    const handleSearch = () => {
        const results = fetchD(input);
        setFilteredResults(results);
        //⬆️Update filtered results state
        setListOfRestaurants(filteredResults)
        //⬆️Update list of restaurants that will appear in the page
    };

    const handleChange = (value) => {
        setInput(value);
    }

    return (
        <div className="body">
            <div className="banner">
                <h2>What are you craving?</h2>
                <div className="search">
                    <input type="text" placeholder="Type a meal..."
                        value={input}
                        onChange={(e) => {
                            handleChange(e.target.value)
                        }}
                    />
                    <button className="btn"
                        onClick={handleSearch}
                    > Search!</button>
                </div>
                <div className="filter-button">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.data.avgRating > 4
                            );
                            setListOfRestaurants(filteredList)
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="res-container">
                {listOfRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.data.id}
                        resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;



