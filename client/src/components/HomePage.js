import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'

const HomePageContainer = styled.div`
margin-top: 55px;
margin-left: 30px;
background: url("https://i.imgur.com/WKPOLId.jpg");
width: 100vw;`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomePageContainer >
                </HomePageContainer>
            </div>

        );
    }
}

export default HomePage;