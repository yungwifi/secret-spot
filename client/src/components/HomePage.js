import React, { Component } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

const HomeButton = styled.div`
a{
    padding: 5px;
    border-radius: 3px;
    background-color: whitesmoke;
    color: #452E00; 
    width: 20vw;
    text-align: center;
    font-size: 20px;
}
a:hover{
    background-color: #D0B682;
}`

const HomePageContainer = styled.div`
background-image: url('https://i.imgur.com/WKPOLId.jpg');
background-attachment: fixed;
min-height: 120vh;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
height: 100%;
margin: 0 auto;
h1{
    width: 100vw;
    padding-top: 14vh;
    display: flex;
    justify-content: center;
    color: whitesmoke;
}`

const ButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;`


class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HomePageContainer >
                    <h1> SHRED IT </h1>
                    <ButtonStyle>
                        <HomeButton> <Link to="/login"> ESKEETIT </Link> </HomeButton>
                    </ButtonStyle>
                </HomePageContainer>
            </div>

        );
    }
}

export default HomePage;