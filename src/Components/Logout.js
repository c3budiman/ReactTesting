import React from 'react'
import Cookies from 'js-cookie';
import FormLogin from './FormLogin';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Token : ''};
  }

  render() {
    if (this.props.Loggedin === false) {
      return(
        <div>
        <FormLogin />
        </div>
      )
    }
  }

}

export default Logout;
