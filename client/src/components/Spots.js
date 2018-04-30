import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'
import axios from 'axios'

class Spots extends Component {
    render() {
        const spotsList = this.props.spots.map((spot, i) => {
            return (
                <div key={i}>
                    <div> Spot Name: {spot.name}</div>
                    <div> Location: {spot.location}</div>
                    <div> Obstacle: {spot.obstacle}</div>
                </div>
            )
        })
        return (
            <div>
                <h4> Spot List </h4>
                {spotsList}
            </div>
        )
    }
}

export default Spots