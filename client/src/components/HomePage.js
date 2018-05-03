import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

const HomePageContainer = styled.div`
background-image: url('https://i.imgur.com/WKPOLId.jpg');
background-color: #FFD404;
background-attachment: fixed;
min-height: 120vh;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
position: relative;
background-position: 30% 50%;
height: 100%;
margin: 0 auto;
h1 {
    width: 100vw;
    padding-top: 14vh;
    display: flex;
    justify-content: center;
    color: whitesmoke;
}
button{
    display: flex;
    justify-content: center;
}
`


class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomePageContainer >
                    <h1> SHRED IT </h1>
                    <Button> <Link to="/login"> ESKEETIT </Link> </Button>
                </HomePageContainer>
            </div>

        );
    }
}

export default HomePage;