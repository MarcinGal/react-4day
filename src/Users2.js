import React from 'react'

class Users2 extends React.Component {
    state = {
        users: null
    }


    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results
            }))
    }

    render() {
        console.log("is rendering")
        return (
            this.state.users &&
                this.state.users.map ?
                this.state.users.map((user) => (
                    <div>{user.email}</div>
                ))
                :
                "nie pasuje mi to"
        )
    }
}

export default Users2