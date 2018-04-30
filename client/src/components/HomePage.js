import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import styled from 'styled-components'

const HomePageContainer = styled.div`
margin-top: 55px;
margin-left: 30px;`

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