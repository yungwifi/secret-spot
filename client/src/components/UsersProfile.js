import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import SpotsList from './SpotsList';
import PhotosList from './PhotosList';
import { Redirect } from 'react-router-dom'
import { Button, Modal } from 'react-materialize'

const DeleteButton = styled.div`
padding: 5px;
border-radius: 3px;
background-color: red;
width: 35vw;
text-align: center;
font-size: 20px;`

const SpotPhotoToggle = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 5vh;
padding: 20px auto;
margin-top: 20px;
margin-bottom: 20px;
button{
 width: 20vw;   
}`

const ProfileDashboard = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-around;`

const UserProfilePhoto = styled.div`
margin-top: 25px;
img{
 width: 165px;
 border-radius: 50%;  
}
input:hover{
    background-color: #5C6B8B;
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
margin-left: 100px;
height: 100vh;`

const UserProfileInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 25vw;
height: 30vh;
input{
   border: none;
}
textarea{
    border: none;
    height: 10px;
    width: 20px;
}`

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
            <div className="grey lighten-2">
                <NavBar />
                <div>
                    <SpotPhotoToggle >
                        <button onClick={this.toggleSpotView}>Spots</button><button onClick={this.togglePhotoView}>Photos</button>
                    </SpotPhotoToggle>
                    <ProfileDashboard >
                        <UserProfileContainer className="white">
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

                                    </div>
                                </UserProfileInfo>
                            </div>
                            <Modal
                                header='Delete Profile'
                                trigger={<Button>Delete Profile</Button>}>
                                <div>
                                    <p> Are you sure you want to delete your profile? </p>
                                    <DeleteButton className="danger" onClick={this.deleteUser}> Delete {this.state.user.userName}'s Profile </DeleteButton>
                                </div>
                            </Modal>

                        </UserProfileContainer>
                        {this.state.photosView ? (<PhotosList {...this.props} />) : null}
                        {this.state.spotsView ? (<SpotsList {...this.props} />) : null}

                    </ProfileDashboard>

                </div>
            </div>
        )
    }
}

export default UserProfile