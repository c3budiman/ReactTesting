import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import FormLogin from './FormLogin'

const About = () => (
  <div className="container">
    <h2>About</h2>
    <p> This is a paragraph about cecep budiman </p>
  </div>
)

const Topic = ({ match }) => (
  <div className="container">
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div className="container">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
    <Navbar />
    <br />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/login" component={FormLogin}/>
    </div>
  </Router>
)
export default BasicExample
