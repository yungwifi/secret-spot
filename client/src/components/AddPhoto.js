import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'


class AddPhoto extends Component {
    state = {
        photos: {
            image: '',
            caption: ''
        }
    }

    handleChange = (e) => {
        const photos = { ...this.state.photos }
        console.log("PHOTO", photos)
        photos[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ photos })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPhoto = {
            image: this.state.photos.image,
            caption: this.state.photos.caption
        }
        console.log("HANDLE SUBMIT", newPhoto)
        this.addPhoto(newPhoto)
    }

    addPhoto = async (newPhoto) => {
        const userId = this.props.userId
        console.log("ADD PHOTO ROUTE BEING CALLED", userId)
        axios.post(`/api/users/${userId}/photos`, newPhoto)
            .then((res) => {
                console.log("RESPONSE FROM NEW PHOTO BEING ADDED", res.data)
                this.setState({ photos: res.data.photos })
                this.props.getUser()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h4> Add New Photo </h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" onChange={this.handleChange} />
                    <label htmlFor="image">Image URL</label>
                    <input type="text" name="image" onChange={this.handleChange} />
                    <button type="submit"> Save Photo </button>
                </form>
            </div>
        )
    }
}

export default AddPhoto