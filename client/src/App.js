import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
