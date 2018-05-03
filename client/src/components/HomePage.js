import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'

const HomePageContainer = styled.div`
width: 100vw;
height: 100vh;`

const HomePageHeader = styled.div`
background-image: url("https://i.imgur.com/WKPOLId.jpg");
width: 100%;
height: 100%;
size: 100px;
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomePageContainer >
                    <HomePageHeader >
                        <h1> SHRED IT </h1>
                    </HomePageHeader>
                </HomePageContainer>
            </div>

        );
    }
}

export default HomePage;