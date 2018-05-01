import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import UserProfile from './components/UsersProfile';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/users/:id" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
