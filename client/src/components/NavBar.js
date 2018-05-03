import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
display: flex;
align-items: center;
box-shadow: 0px 10px 10px rgba(0,0,0,0.5);
justify-content: space-between;
`

const Brand = styled.div`
display: flex;
justify-content: left;
margin-left: 60px;`

const NavLinks = styled.div`
display: flex;
width: 20vw;
margin-right: 15px;
justify-content: space-around;
a{
    text-decoration: none;
}
`

class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <Brand >
                    <Link to="/"><h3> Secret Spot </h3></Link>
                </Brand>
                <NavLinks>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div>
                        <div>|</div>
                    </div>
                    <div>
                        <Link to='/login'>Sign Up</Link>
                    </div>
                </NavLinks>
            </NavContainer>
        );
    }
}

export default NavBar;