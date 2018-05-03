import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Photos from './Photo'
import AddPhoto from './AddPhoto';


class PhotosList extends Component {
    state = {
        user: {},
        photos: [],
        addPhotoView: false
    }

    componentDidMount() {
        this.getUser()
    }

    toggleAddPhoto = () => {
        this.setState({
            addPhotoView: true
        })
    }

    getUser = () => {
        const userId = this.props.match.params.id
        console.log("GETTING USER ID", userId)
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({
                    user: res.data,
                    photos: res.data.photos
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deletePhoto = (photoId) => {
        const userId = this.state.user._id
        const url = `/api/users/${userId}/photos/${photoId}`
        console.log("DELETE PHOTO ROUTE BEING CALLED", url)
        axios.delete(url)
            .then((res) => {
                console.log("RESPONSE FROM PHOTO DELETING", res.data)
                this.componentDidMount()
            }).catch(console.error)
    }

    addPhoto = (newPhoto) => {
        const userId = this.props.match.params.id
        console.log("ADD PHOTO ROUTE BEING CALLED", userId)
        axios.post(`/api/users/${userId}/photos`, newPhoto)
            .then((res) => {
                console.log("RESPONSE FROM NEW PHOTO", res.data)
                this.setState({ photos: res.data.photos })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h4> Photo List </h4>
                {this.state.addPhotoView ? (<AddPhoto addPhoto={this.addPhoto} />) : null}
                <button onClick={this.toggleAddPhoto}> Add Photo </button>
                <Photos user={this.state.user} photos={this.state.photos} deletePhoto={this.deletePhoto} />
            </div>
        )
    }
}

export default PhotosList