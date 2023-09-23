import { DATA_API } from "./constants";

const getListOfRestaurants = async () => {
    const data = await fetch(DATA_API);
    return data.json();
};

export default getListOfRestaurants;