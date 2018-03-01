import React from 'react';
import UserProfile from './UserProfile';

class Login extends React.Component {
  constructor(props) {
    super();
    this.state = { Token: '', Type: '', TTL : '' }
  }

  Login() {
    fetch('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'makarov@gmail.com',
        password: '123456',
      })
    }).then(access_token => { return access_token.json() })
      .then(datanya => {
        let Token = datanya.access_token;
        let Type = datanya.token_type;
        let TTL = datanya.expires_in;
        this.setState({Token: Token, Type: Type, TTL: TTL});
      })
  }

  componentDidMount() {
    this.Login();
  }

  render() {
    return(
      <div>
      <UserProfile token={this.state.Token} />
      </div>
    )
  }
}

export default Login;
