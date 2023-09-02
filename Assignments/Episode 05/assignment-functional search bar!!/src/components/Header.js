
const Header = () => {
    return (
        <div className="header">
            <div className="logo-text">
                <img className="logo" src={require("../../images/Logo.jpg")} alt="Food App logo" />
                <p className="name-app">My Food App</p>
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


export default Header;