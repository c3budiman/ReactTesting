import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Child } from './Child';
import 'bootstrap/dist/css/bootstrap.min.css';
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

export default Home;
