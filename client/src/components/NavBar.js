import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
display: flex;
align-items: center;
box-shadow: 0px 3px 2px rgba(0,0,0,0.5);
justify-content: space-between;
background-color: #D0B682;
position: relative;
`

const Brand = styled.div`
display: flex;
justify-content: left;
margin-left: 60px;
a{
    color: #452E00;
}`

const NavLinks = styled.div`
display: flex;
width: 20vw;
margin-right: 15px;
justify-content: space-around;
a{
    text-decoration: none;
    color: #452E00;
}
a:hover{
    color: white;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    padding: 5px;
    border-radius: 2px;
}
`

class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <Brand >
                    <Link to="/"><h3> Secret Spot </h3></Link>
                </Brand>
                <NavLinks className="hide-on-small-only">
                    <div>
                        <Link to='/login'>Users</Link>
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