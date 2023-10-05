import { DATA_API } from "./constants";

const getListOfRestaurants = async () => {
    const data = await fetch(DATA_API);
    return data.json();
};

export default getListOfRestaurants;


/* How would I USE THIS INSIDE Body.js
const [searchText, setsearchText] = useState("");
const [filteredRestaurants, setFilteredRestaurants] = useState([])

useEffect(() => {
    getListOfRestaurants().then(r => setFilteredRestaurants(r))
}, []) 

*/