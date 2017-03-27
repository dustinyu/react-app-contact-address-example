import React from 'react';

const Address = (props) => (
  <div>
    <p>{props.address.line1}</p>
    <p>{props.address.town}</p>
    <p>{props.address.county}</p>
    <p>{props.address.country}</p>
  </div>
);

Address.propTypes = {
  address: React.PropTypes.shape({
    line1: React.PropTypes.string.isRequired,
    town: React.PropTypes.string.isRequired,
    county: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired,
  }).isRequired
};

export default Address;
