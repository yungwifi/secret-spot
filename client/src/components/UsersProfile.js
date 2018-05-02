import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import SpotsList from './SpotsList';
import PhotosList from './PhotosList';
import { Redirect } from 'react-router-dom'

const UserProfilePhoto = styled.div`
img{
 width: 165px;
 border-radius: 50%;  
  
}`

const UserProfileContainer = styled.div`
display: flex;
border: solid black 1px;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 25vw;
height: 60vh;
margin-left: 100px;`

const UserProfileInfo = styled.div`
display: flex;
`

class UserProfile extends Component {
    state = {
        user: {
            name: '',
        },
        redirect: false,
        photosView: false,
        spotsView: true,
    }

    componentDidMount() {
        this.getUser()
    }

    togglePhotoView = () => {
        this.setState({
            photosView: true,
            spotsView: false
        })
    }

    toggleSpotView = () => {
        this.setState({
            photosView: false,
            spotsView: true
        })
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

    updateUser = () => {
        const userId = this.props.match.params.id
        const updatedUser = this.state.user
        console.log("UPDATE USER BEING CALLED", userId)
        axios.patch(`/api/users/${userId}`, updatedUser)
            .then((res) => {
                console.log("SETTING STATE", res.data)
                this.setState({ user: this.state.user })
            })
            .catch(console.error)
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ user })
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to="/login" />)
        }
        return (
            <div>
                <NavBar />
                <div>
                    <h1> {this.state.user.name}'s Page </h1>
                    User Profile Page
                    <div>
                        <button onClick={this.toggleSpotView}>Spots</button><button onClick={this.togglePhotoView}>Photos</button>
                    </div>
                    {this.state.photosView ? (<PhotosList {...this.props} />) : null}
                    {this.state.spotsView ? (<SpotsList {...this.props} />) : null}
                    <UserProfileContainer >
                        <div>
                            <UserProfilePhoto >
                                <img src={this.state.user.profilePhoto} />
                            </UserProfilePhoto>
                        </div>
                        <div>
                            <UserProfileInfo>
                                <div className="userInfo">
                                    <div> Name: <input type="text" name="name" value={this.state.user.name}
                                        onChange={this.handleChange} onBlur={() => this.updateUser()} /> </div>
                                    <div> Stance: <input type="text" name="stance" value={this.state.user.stance}
                                        onChange={this.handleChange} onBlur={() => this.updateUser()} />  </div>
                                    <div> Location: <input type="text" name="location" value={this.state.user.location}
                                        onChange={this.handleChange} onBlur={() => this.updateUser()} /> </div>
                                    <div> Bio: <textarea type="text" name="bio" value={this.state.user.bio}
                                        onChange={this.handleChange} onBlur={() => this.updateUser()} />  </div>

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