import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Token: '', Type: '', TTL : '' }
  }

  Login(eml, pwd) {
    fetch('http://localhost:8000/api/auth/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: eml,
        password: pwd,
      })
    }).then(access_token => { return access_token.json() })
      .then(datanya => {
        let Token = datanya.access_token;
        let Type = datanya.token_type;
        let TTL = datanya.expires_in;
        this.setState({Token: Token, Type: Type, TTL: TTL});
        console.log(this.state.Token);
      })
  }

  // componentDidUpdate() {
  //    this.Login(this.props.email, this.props.password);
  // }

  // componentWillUpdate() {
  //   this.Login(this.props.email, this.props.password);
  // }

  render() {
    return(
      <div className="container">
        <div className="row">
        tes {this.props.email}
        {this.state.Token}
        </div>
      </div>
    )
  }
}

export default Login;
