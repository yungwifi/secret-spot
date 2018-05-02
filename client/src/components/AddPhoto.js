import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'


class AddPhoto extends Component {
    state = {
        photos: {}
    }

    handleChange = (e) => {
        const photo = { ...this.state.photos }
        photo[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ photo })
    }

    addPhoto = (newPhoto) => {
        const userId = this.props.match.params.id
        const payload = {
            image: this.state.photos.image,
            caption: this.state.photos.caption
        }
        console.log("ADD PHOTO ROUTE BEING CALLED", payload, userId)
        axios.post(`/api/users/${userId}/photos`, payload)
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
                <h4> Add New Photo </h4>
                <label htmlFor="caption">Caption</label>
                <input type="text" name="caption" onChange={(e) => this.handleChange(e)} />
                <label htmlFor="image">Image URL</label>
                <input type="text" name="image" onChange={(e) => this.handleChange(e)} />
                <button onClick={this.addPhoto}> Save Photo </button>
            </div>
        )
    }
}

export default AddPhoto