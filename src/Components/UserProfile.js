import React from 'react';
import Cookies from 'js-cookie';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Nama : '', Email : '', Posts: []};
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
            ,
            </div>
          )
        })
        this.setState({Nama: nama, Email: email, Posts: posts});
      })
  }

  componentDidMount() {
    let tokenvar = "Bearer " + Cookies.get('access_token');
    this.GetUserInfo(tokenvar);

  }

  render() {
    return(
      <div>
      <hr />
      <div className="row">
      <div className="col-md-6">
          <div className="card">
            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">{this.state.Nama}</h4>
              <p className="card-text">{this.state.Email}</p>
              <a href="/logout" className="btn btn-primary">Log Out</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <h2> Status Timeline Kamu : </h2>
        {this.state.Posts}
        </div>
      </div>
      </div>

    )
  }
}

export default UserProfile;
