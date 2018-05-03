import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import SignUp from './SignUp';

const LoginContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 25px;
margin-left: 35px;`

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
                    <div>
                        <h1> Skaters </h1>
                        {userLinks}
                    </div>
                    <SignUp />
                </LoginContainer>
            </div>

        );
    }
}

export default LogInPage;