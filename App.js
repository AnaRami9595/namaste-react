import React from "react";
import ReactDOM  from "react-dom/client"


const Header = () => {
    return ( 
        <div className="header">
            <div>
                <img className="logo" src={require("./images/Logo.jpg")} alt="Food App logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
     );
}


    const RestaurantCard = (props) => {
        const {resData} = props
        const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} =resData?.data

        return ( 
            <div className="res-card" style={{
                backgroundColor: "#f0f0f0"
            }}>
                <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
                <strong>{name}</strong>
                <li>{cuisines.join(", ")} </li>
                <li>{deliveryTime} </li>
                <li>{costForTwo/10}</li>
                <li>{avgRating}</li>
            </div>
         );
    }
     
    

const Body = () => {
    return ( 
    <div className="body">
        <div className="search">Search Bar here</div>
        <div className="res-container">
           {
            restArr.map(restaurant => (
            <RestaurantCard key={restaurant.data.id}
            resData = {restaurant}/>
            ))}
        </div>
    </div> 
    );
}
 

 

const AppLayout = () => {
    return (  
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
}

//Let's say that this is what the Api brings us
const restArr = [
    {type: "restaurant",
    data: {
id : "1",
name: "Paratha Box",
avgRating: 4.8,
cuisines: ["North Indian","Punjabi","Indian",],
deliveryTime: "Delivered in 30 minutes",
costForTwo : 2000,
cloudinaryImageId: "t1ycq1zgn0n0lbb7v4e4",
    }},

    {type: "restaurant",
    data: {
id : "2",
name: "EatFit",
avgRating: 4.5,
cuisines: ["Chinese","Healthy Food","Tandoor",],
deliveryTime: "Delivered in 31 minutes",
costForTwo : 5000,
cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
    }},

    {type: "restaurant",
    data: {
        id : "3",
name: "NIC Ice Creams",
avgRating: 4.0,
cuisines: ["Ice Cream","Desserts",],
deliveryTime: "Delivered in 30 minutes",
costForTwo : 12000,
cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
    }},

    {type: "restaurant",
    data: {
        id : "4",
name: "Bikanervala",
avgRating: 4.8,
cuisines: ["North Indian","Snacks","Chaat",],
deliveryTime: "Delivered in 30 minutes",
costForTwo : 2000,
cloudinaryImageId: "bhb6fmjbetmpa2nh3w0t",
    }},

    {type: "restaurant",
    data: {
        id : "5",
name: "Punjabi Angithi",
avgRating: 4.8,
cuisines: [ "North Indian","Chinese",],
deliveryTime: "Delivered in 10 minutes",
costForTwo : 7000,
cloudinaryImageId: "wynnlcwjqfltykkbuudv",
    }},

    {type: "restaurant",
    data: {
 id : "6",
name: "Burger King",
avgRating: 3.8,
cuisines: ["Burgers", "American",],
deliveryTime: "Delivered in 30 minutes",
costForTwo : 2000,
cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    }},

    {type: "restaurant",
    data: {
id : "7",
name: "KFC",
avgRating: 3.8,
cuisines: ["Chicken", "American",],
deliveryTime: "Delivered in 20 minutes",
costForTwo : 7000,
cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    }},

     {type: "restaurant",
    data: {
id : "8",
name: "Pizza Hut",
avgRating: 3.9,
cuisines: ["Pizza"],
deliveryTime: "Delivered in 50 minutes",
costForTwo : 6000,
cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    }},
    {type: "restaurant",
    data: {
id : "9",
name: "Gianis - Ice Cream, Shakes & Sundaes",
avgRating: 4.8,
cuisines: ["Ice Cream","Desserts","Beverages","Bakery"],
deliveryTime: "Delivered in 40 minutes",
costForTwo : 5000,
cloudinaryImageId: "qgn42eb1awwug08cxaup",
    }},
    {type: "restaurant",
    data: {
id : "10",
name: "Domino's Pizza",
avgRating: 3.5,
cuisines: [ "Pizzas","Italian","Pastas","Desserts"],
deliveryTime: "Delivered in 35 minutes",
costForTwo : 8000,
cloudinaryImageId: "actf0p77lialtw7tsmxs",
    }},
     {type: "restaurant",
    data: {
id : "11",
name: "Bakingo",
avgRating: 3.5,
cuisines: [ "Bakery","Desserts","Beverages","Snacks"],
deliveryTime: "Delivered in 30 minutes",
costForTwo : 2000,
cloudinaryImageId: "rmnzl74nmlldrsv9bnvk",
    }},
    {type: "restaurant",
    data: {
id : "12",
name: "Keventers - Milkshakes & Desserts",
avgRating: 3.5,
cuisines: [ "Beverages","Ice Cream","Desserts", "Healthy Food"],
deliveryTime: "Delivered in 38 minutes",
costForTwo : 4000,
cloudinaryImageId: "f0e94c984813053f46c214f18ce73d59",
    }},

    {type: "restaurant",
    data: {
id : "13",
name: "Oven Story Pizza",
avgRating: 3.5,
cuisines: [ "Pizzas", "Pastas","Italian","Desserts", "Beverages"],
deliveryTime: "Delivered in 28 minutes",
costForTwo : 4000,
cloudinaryImageId: "b3bbdfabc4c38d7732cfb29f8fba352e",
    }},

     {type: "restaurant",
    data: {
id : "14",
name: "McDonald's",
avgRating: 4,
cuisines: [ "American"],
deliveryTime: "Delivered in 28 minutes",
costForTwo : 4000,
cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
    }},
     {type: "restaurant",
    data: {
id : "15",
name: "Nirula's",
avgRating: 4.5,
cuisines: [ "Desserts", "Ice Cream","Beverages","Ice Cream Cakes","Juices"],
deliveryTime: "Delivered in 36 minutes",
costForTwo : 7000,
cloudinaryImageId: "ugwu5o4eaawumpjeceds",
    }},
    {type: "restaurant",
    data: {
id : "16",
name: "Berco's -If you love Chinese",
avgRating: 4.5,
cuisines: [ "Asian","Thai", "Chinese","Seafood", "Desserts","Beverages"],
deliveryTime: "Delivered in 46 minutes",
costForTwo : 9000,
cloudinaryImageId: "tpep2upccqy9nkd4v2gh",
    }}
]

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)