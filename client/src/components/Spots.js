import React, { Component } from 'react';
import styled from 'styled-components'

const SpotContainer = styled.div`
border: solid black 1px;
margin: 10px;
width: 40vw;
padding: 15px;
box-shadow: 2px 2px 2px rgba(0,0,0,0.5);
background-color: white;
@media(max-width: 600px){
    width: 90vw;
}`

class Spots extends Component {
    render() {
        const spotsList = this.props.spots.map((spot, i) => {
            return (
                <SpotContainer >
                    <div key={i}>
                        <div> Spot Name: <input type="text" name="name" value={spot.name}
                            onChange={(e) => { this.props.handleChange(spot, e) }}
                            onBlur={() => this.props.updateSpot(spot._id)} placeholder="Spot Name" /> </div>
                        <div> Location: <input type="text" name="location" value={spot.location}
                            onChange={(e) => { this.props.handleChange(spot, e) }}
                            onBlur={() => this.props.updateSpot(spot._id)} placeholder="Location" /></div>
                        <div> Obstacle: <input type="text" name="obstacle" value={spot.obstacle}
                            onChange={(e) => { this.props.handleChange(spot, e) }}
                            onBlur={() => this.props.updateSpot(spot._id)} placeholder="Obstacle" /></div>
                        <button onClick={() => this.props.deleteSpot(spot._id)}> Delete Spot </button>
                    </div>
                </SpotContainer>
            )
        })
        return (
            <div>
                {spotsList}
            </div>
        )
    }
}

export default Spots