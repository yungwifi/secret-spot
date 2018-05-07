import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import SignUp from './SignUp';

const LoginContainer = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-around;
background-color: #949089;
padding-top: 30px;
padding-bottom: 30px;
a{
    text-decoration: none;
    color: #452E00;
}
a:hover{
    color: white;
}
@media(max-width: 600px){
   flex-direction: column;
}`

class LogInPage extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        console.log("API GETTING USERS")
        axios.get('/api/users')
            .then(res => {
                console.log("USERS DATA", res.data)
                this.setState({ users: res.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${user._id}`}>{user.userName}</Link>
                </div>)
        })
        return (
            <div>
                <NavBar />
                <LoginContainer >
                    <SignUp />
                    <div>
                        <h3> Skaters </h3>
                        {userLinks}
                    </div>

                </LoginContainer>
            </div>

        );
    }
}

export default LogInPage;