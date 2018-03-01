import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super();
    this.state = { userName: [], Registered: []  }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/users').then(data => { return data.json() })
      .then(datanya => {
        let userName = datanya.data.map((pic) => {
          return (
            <div key={pic.id}>
            <li> {pic.email}, Registered {pic.registered} </li>
            </div>
          )
        })
        this.setState({userName: userName});
      })
  }

  render() {
    return(
      <div>
      <ul>
      {this.state.userName}
      </ul>
      </div>
    )
  }
}

export default Users;
