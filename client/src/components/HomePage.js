import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'
import header from '../public/images/header.jpg'

const HomePageContainer = styled.div`
margin-top: 55px;
margin-left: 30px;
background: url({header});`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomePageContainer >
                    This is the home page
                </HomePageContainer>
            </div>

        );
    }
}

export default HomePage;