import React, { Component } from 'react';
import styled from 'styled-components'

const SpotContainer = styled.div`
border: solid black 1px;
margin: 10px;`

class Spots extends Component {
    render() {
        const spotsList = this.props.spots.map((spot, i) => {
            return (
                <SpotContainer >
                    <div key={i}>
                        <div> Spot Name: <input type="text" name="name" value={spot.name}
                            onChange={this.props.handleChange} /> </div>
                        <div> Location: <input type="text" name="location" value={spot.location}
                            onChange={this.props.handleChange} /></div>
                        <div> Obstacle: <input type="text" name="obstacle" value={spot.obstacle}
                            onChange={this.props.handleChange} /></div>
                    </div>
                </SpotContainer>
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