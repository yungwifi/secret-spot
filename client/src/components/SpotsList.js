import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'
import Spots from './Spots'

class SpotsList extends Component {
    state = {
        user: {},
        spots: []
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
                    spots: res.data.spots
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    addSpot = () => {
        const userId = this.state.user._id
        const url = `/api/users/${userId}/spots`
        console.log("CREATE SPOT ROUTE BEING CALLED", url)
        axios.post(url)
            .then((res) => {
                console.log("RESPONSE FROM NEW SPOT", res.data)
                this.setState({ spots: res.data.ideas })
            })
    }
    render() {
        return (
            <div>
                <button> Add Spot </button>
                <Spots user={this.state.user} spots={this.state.spots} />
            </div>
        )
    }
}

export default SpotsList