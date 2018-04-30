import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
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
    render() {
        return (
            <div>
                <Photos user={this.state.user} photos={this.state.photos} />
            </div>
        )
    }
}

export default PhotosList