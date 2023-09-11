import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();


        this.setState({
            userInfo: json,
        })
    }

    componentWillUnmount() {
        console.log("component will unmount")

    }

    render() {
        const { name, location, twitter_username, avatar_url } = this.state.userInfo
        //console.log(this.props.name + " child render")
        return (

            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Handle: {twitter_username}</h4>
            </div>

        )
    }
}

export default UserClass;





