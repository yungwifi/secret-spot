import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
