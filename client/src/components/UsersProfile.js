import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import SpotsList from './SpotsList';

const UserProfilePhoto = styled.div`
img{
 width: 165px;
 border-radius: 50%;   
}`

const UserProfileContainer = styled.div`
display: flex;
border: solid black 1px;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
align-items: column;
width: 30vw;
height: 60vh;`

const UserProfileInfo = styled.div`
display: flex;
justify-content: column;
align-content: right;
`

class UserProfile extends Component {
    state = {
        user: [],
        redirect: true,
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        const userId = this.props.match.params.id
        console.log("GETTING USER ID", userId)
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteUser = () => {
        const userId = this.props.match.params.id
        console.log("DELETING USER ID", userId)
        axios.delete(`/api/users/${userId}`)
            .then((res) => {
                console.log("RESPONSE FROM DELETING", res.data)
                this.setState({ redirect: true })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1> {this.state.user.name}'s Page </h1>
                    User Profile Page
                    <div>
                        <button>Spots</button><button>Photos</button>
                    </div>
                    <SpotsList {...this.props} />
                    <UserProfileContainer >
                        <div>
                            <UserProfilePhoto >
                                <img src={this.state.user.profilePhoto} />
                            </UserProfilePhoto>
                        </div>
                        <div>
                            <UserProfileInfo>
                                <div className="userInfo">
                                    <div> Name: {this.state.user.name} </div>
                                    <div> Stance: {this.state.user.stance} </div>
                                    <div> Location: {this.state.user.location} </div>
                                    <div> Bio: {this.state.user.bio} </div>
                                </div>
                            </UserProfileInfo>
                        </div>
                    </UserProfileContainer>

                    <button onClick={this.deleteUser}> Delete {this.state.user.userName}'s Profile </button>
                </div>
            </div>
        )
    }
}

export default UserProfile