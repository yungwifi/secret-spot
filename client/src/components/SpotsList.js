import React, { Component } from 'react';
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
        console.log("CREATE SPOT ROUTE BEING CALLED", userId)
        axios.post(`/api/users/${userId}/spots`)
            .then((res) => {
                console.log("RESPONSE FROM NEW SPOT", res.data)
                this.setState({ spots: res.data.spots })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = (updatedSpot, e) => {
        const spots = [...this.state.spots]
        const newSpot = spots.map((spot) => {
            if (spot._id === updatedSpot._id) {
                spot[e.target.name] = e.target.value
            }
            return spot
        })
        console.log("HANDLE CHANGE", e.target.value)
        this.setState({ spots: newSpot })
    }

    updateSpot = (spotId) => {
        const userId = this.state.user._id
        const updatedSpot = this.state.spots
        console.log("UPDATE USER BEING CALLED", userId)
        axios.patch(`/api/users/${userId}/spots/${spotId}`, updatedSpot, { spotId })
            .then((res) => {
                console.log("SETTING STATE", res.data)
                this.setState({ spots: this.state.spots })
            })
            .catch(console.error)
    }

    deleteSpot = (spotId) => {
        const userId = this.state.user._id
        const url = `/api/users/${userId}/spots/${spotId}`
        console.log("DELETE SPOT ROUTE BEING CALLED", url)
        axios.delete(url)
            .then((res) => {
                console.log("RESPONSE FROM SPOT DELETING", res.data)
                this.componentDidMount()
            }).catch(console.error)
    }

    render() {
        return (
            <div>
                <Spots user={this.state.user} spots={this.state.spots}
                    handleChange={this.handleChange} updateSpot={this.updateSpot}
                    deleteSpot={this.deleteSpot} />
                <button onClick={this.addSpot}> Add Spot </button>
            </div>
        )
    }
}

export default SpotsList