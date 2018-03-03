import React from 'react';
import UserProfile from './UserProfile';
import Cookies from 'js-cookie';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', emailfix: '', passwordfix: '', Loggedin: false};
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.Post(this.state.email,this.state.password)
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
        Cookies.set('access_token', Token);
        this.setState({Token: Token, Type: Type, TTL: TTL, Loggedin: true});
      })
  }

  Post(eml,psw) {
    this.setState({emailfix: eml, passwordfix: psw});
    this.Login(eml,psw);
  }

  render() {
    if (Cookies.get('access_token') != null) {
      return (
        <div className="container">
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h1> Anda berhasil Login </h1>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <UserProfile Token={Cookies.get('access_token')} />
        </div>
      )
    } else {
      return (
        <div className="container">
        <form onSubmit={this.handleSubmit}>
        <h1> Silahkan Login </h1>
        <hr />
        <label>Email : </label>
        <input className="form-control" type="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} />
        <br />
        <label>Password : </label>
        <input className="form-control" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
        <br />
          <input type="submit" value="Submit" className="btn btn-info float-right" />
        </form>
        </div>
      )
    }
  }
}

export default FormLogin;
