import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from 'react-materialize'

const PhotoContainer = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;`

const PhotoInfoContainer = styled.div`
img{
    width: 15vw;
    height: 30vh;
}
display: flex;
flex-direction: row;
margin: 10px;
width: 40vw;
padding: 15px;
`

class Photos extends Component {
    render() {
        const photosList = this.props.photos.map((photo, i) => {
            return (
                <div key={i}>
                    <PhotoInfoContainer >
                        <img className="responsive-img" src={photo.image} />
                        <div> {photo.caption}</div>
                    </PhotoInfoContainer>
                    <div>
                        <button onClick={() => this.props.deletePhoto(photo._id)}> Delete Photo </button>
                    </div>

                </div>
            )
        })
        return (
            <div>
                <PhotoContainer >
                    {photosList}
                </PhotoContainer>
            </div>
        )
    }
}

export default Photos