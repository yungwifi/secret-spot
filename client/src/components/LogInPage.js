import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'

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
                    <Link to={`/user/${user._id}`}>{user.userName}</Link>
                </div>)
        })
        return (
            <div>
                <NavBar />
                <h1> Skaters </h1>
                {userLinks}
            </div>

        );
    }
}

export default LogInPage;