import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  GetUserInfo() {
    fetch('http://localhost:8000/api/user/profile/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authentication': 'Bearer ' + this.props.Token,
      }
    }).then(access_token => { return access_token.json() })
      // .then(datanya => {
      //   let Token = datanya.access_token;
      //   let Type = datanya.token_type;
      //   let TTL = datanya.expires_in;
      // })
  }

  render() {
    return(
      <div>
      Your Token : {this.props.Token}
      </div>
    )
  }
}

export default UserProfile;
