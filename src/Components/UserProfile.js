import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Token: '', Type: '', TTL : '' }
  }

  // GetUserInfo() {
  //   fetch('http://localhost:8000/api/user/profile/', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   })
  // }
  //
  // componentDidMount() {
  //   this.GetUserInfo();
  // }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default UserProfile;
