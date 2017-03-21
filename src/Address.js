import React, { Component } from 'react';

class Address extends Component {
  render() {
    return (
      <div>
        <p>{this.props.address.line1}</p>
        <p>{this.props.address.town}</p>
        <p>{this.props.address.county}</p>
        <p>{this.props.address.country}</p>
      </div>
    );
  }
}

Address.propTypes = {
  address: React.PropTypes.shape({
    line1: React.PropTypes.string.isRequired,
    town: React.PropTypes.string.isRequired,
    county: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired,
  }).isRequired
};

export default Address;
