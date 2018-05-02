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

    render() {
        return (
            <div>
                <Photos user={this.state.user} photos={this.state.photos} deletePhoto={this.deletePhoto} />
                {this.state.addPhotoView ? (<AddPhoto addPhoto={this.addPhoto}
                    user={this.state.user} photos={this.state.photos} handleChange={this.handleChange} />) : null}
                <button onClick={this.toggleAddPhoto}> Add Photo </button>
            </div>
        )
    }
}

export default PhotosList