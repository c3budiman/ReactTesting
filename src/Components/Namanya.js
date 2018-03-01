import React from 'react'


class Namanya extends React.Component {
  render() {
    return (
      <div>
      <h3>
      Nama yg dipilih Adalah : {this.props.name}
      </h3>
      </div>
    )
  }
}

export default Namanya;
