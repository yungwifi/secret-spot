import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Photos from './Photo'


class PhotosList extends Component {
    state = {
        user: {},
        photos: []
    }

    componentDidMount() {
        this.getUser()
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
    addPhoto = () => {
        const userId = this.state.user._id
        console.log("CREATE PHOTO ROUTE BEING CALLED", userId)
        axios.post(`/api/users/${userId}/photos`)
            .then((res) => {
                console.log("RESPONSE FROM NEW Photo", res.data)
                this.setState({ photos: res.data.photos })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Photos user={this.state.user} photos={this.state.photos} />
                <button onClick={this.addPhoto}> Add Photo </button>
            </div>
        )
    }
}

export default PhotosList