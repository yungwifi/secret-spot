import React, { Component } from 'react';
import styled from 'styled-components'

const PhotoContainer = styled.div`
img{
    width: 15vw;
    height: 30vh;
}
display: flex;
flex-direction: row;
border: solid black 1px;
`

class Photos extends Component {
    render() {
        const photosList = this.props.photos.map((photo, i) => {
            return (
                <div key={i}>
                    <PhotoContainer >
                        <img src={photo.image} />
                        <div> {photo.caption}</div>
                    </PhotoContainer>
                    <div>
                        <button onClick={() => this.props.deletePhoto(photo._id)}> Delete Photo </button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {photosList}
            </div>
        )
    }
}

export default Photos