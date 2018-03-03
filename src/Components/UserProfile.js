import React from 'react';
import Cookies from 'js-cookie';
import FormLogin from './FormLogin';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Nama : '', Email : '', Posts: [],Loggedin: true};
    this.LogoutFunc = this.LogoutFunc.bind(this);
  }

  GetUserInfo(tokenvar) {
    fetch('http://localhost:8000/api/user/profile/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': tokenvar,
      }
    }).then(access_token => { return access_token.json() })
      .then(datanya => {
        console.log(datanya)
        let nama = datanya.data.nama;
        let email = datanya.data.email;
        let posts = datanya.data.posts.data.map((pic) => {
          return (
            <div key={pic.id}>
            <div className="card bg-secondary text-white">
              <div className="card-body">{pic.post}</div>
              <div className="card-footer"><span className="badge badge-light">{pic.published}</span></div>
            </div>
            <div style={{marginBottom: 20}}> </div>
            </div>
          )
        })
        this.setState({Nama: nama, Email: email, Posts: posts, Loggedin: true});
      })
  }

  componentDidMount() {
    let tokenvar = "Bearer " + Cookies.get('access_token');
    this.GetUserInfo(tokenvar);
  }

  LogoutFunc() {
    let tokenvar = "Bearer " + Cookies.get('access_token');
    Cookies.remove('access_token');
    fetch('http://localhost:8000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': tokenvar,
      }
    }).then(access_token => { return access_token.json() })
      .then(datanya => {
        console.log(datanya)
      })
      this.setState({Loggedin: false});
  }

  render() {
    if (this.state.Loggedin) {
      return(
        <div>
        <div className="row">
        <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card" />
              <div className="card-body">
                <h4 className="card-title">{this.state.Nama}</h4>
                <p className="card-text">{this.state.Email}</p>
                <button onClick={this.LogoutFunc} className="btn btn-primary">Log Out</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          <h2> Status Timeline Kamu : </h2>
          {this.state.Posts}
          </div>
        </div>
        </div>
      )
    } else {
      return( <div> <FormLogin /> </div>)
    }

  }
}

export default UserProfile;
