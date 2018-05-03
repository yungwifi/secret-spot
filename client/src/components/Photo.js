import React, { Component } from 'react';
import styled from 'styled-components'
import { Button } from 'react-materialize'

const PhotoContainer = styled.div`
img{
    width: 15vw;
    height: 30vh;
}
display: flex;
flex-direction: row;
justify-content: space-between;
`

class Photos extends Component {
    render() {
        const photosList = this.props.photos.map((photo, i) => {
            return (
                <div key={i}>
                    <PhotoContainer >
                        <img className="responsive-img" src={photo.image} />
                        <div> {photo.caption}</div>
                    </PhotoContainer>
                    <div>
                        <Button onClick={() => this.props.deletePhoto(photo._id)}> Delete Photo </Button>
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