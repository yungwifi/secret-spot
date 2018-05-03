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
        console.log("HANDLE SUBMIT")
        this.props.addPhoto({ photos: this.state.photos })
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