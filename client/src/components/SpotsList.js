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
        const url = `/api/users/${userId}/spots`
        console.log("CREATE SPOT ROUTE BEING CALLED", url)
        axios.post(url)
            .then((res) => {
                console.log("RESPONSE FROM NEW SPOT", res.data)
                this.setState({ spots: res.data.ideas })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = (e) => {
        const spot = [...this.state.spots]
        spot[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.value)
        this.setState({ spot })
    }

    // updateIdea = (ideaId) => {
    //     const userId = this.state.user._id
    //     console.log(ideaId)
    //     console.log("UPDATE IDEA BEING CALLED")
    //     axios.patch(`/api/users/${userId}/ideas/${ideaId}`, { ideaId })
    //         .then((res) => {
    //             console.log("SETTING STATE", res.data)
    //             this.componentDidMount()
    //         })
    //         .catch(console.error)
    // }

    render() {
        return (
            <div>
                <Spots user={this.state.user} spots={this.state.spots} handleChange={this.handleChange} />
                <button onClick={this.addSpot}> Add Spot </button>
            </div>
        )
    }
}

export default SpotsList