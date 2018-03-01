import React from 'react'
import { ListNama } from './ListNama';
import Users from './Users'
import Login from './Login'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div className="container">
      <h1 className="page-header">
        Home
      </h1>
      <hr />
      <h2 className="page-header">
        Pilih Nama :
      </h2>
      <ListNama name={this.state.name} onChange={this.changeName} />
      <Users />
      <Login />
      </div>
    )
  }
}

export default Home;
