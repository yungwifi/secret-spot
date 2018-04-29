import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Router, Switch } from 'react-router-dom'
import NavBar from './NavBar';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                This is the home page
            </div>
        );
    }
}

export default HomePage;