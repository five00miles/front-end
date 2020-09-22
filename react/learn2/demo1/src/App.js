import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

import IndexPage from '@/views/Index.js'
import LoginPage from '@/views/Login.js'

class App extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/login">登陆</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={IndexPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
          </Switch>
        </HashRouter>

      </div>
    )
  }
}

export default App;
