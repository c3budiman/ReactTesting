import React from 'react';
import Namanya from './Namanya';

export class ListNama extends React.Component {
  constructor(props) {
  	super(props);
    this.handleChange = this.handleChange.bind(this);
	}

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }


  render() {
    if (this.props.name === "") {
      return (
        <div className="container">
          <h1 className="page-header">
          <select className="form-control" id="great-names"
            onChange={this.handleChange}>
            <option value="">
              Pilih nama
            </option>
            <option value="Cecep">
              Cecep
            </option>
            <option value="Budi">
              Budi
            </option>
            <option value="Iman">
              Iman
            </option>
          </select>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="page-header">
          <select className="form-control" id="great-names"
            onChange={this.handleChange}>
            <option disabled value="">
              Pilih nama
            </option>
            <option value="Cecep">
              Cecep
            </option>
            <option value="Budi">
              Budi
            </option>
            <option value="Iman">
              Iman
            </option>
          </select>
          </h1>
          <Namanya name={this.props.name} />
        </div>

      );
    }
  }
}
