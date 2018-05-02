import React, { Component } from 'react';
import styled from 'styled-components'

const PhotoContainer = styled.div`
img{
    width: 175px;
}
display: flex;
flex-direction: row;
`

class Photos extends Component {
    render() {
        const photosList = this.props.photos.map((photo, i) => {
            return (
                <div key={i}>
                    <img src={photo.image} />
                    <div> {photo.caption}</div>
                    <button onClick={() => this.props.deletePhoto(photo._id)}> Delete Photo </button>
                </div>
            )
        })
        return (
            <div>
                <h4> Photo List </h4>
                <PhotoContainer >
                    {photosList}
                </PhotoContainer>
            </div>
        )
    }
}

export default Photos