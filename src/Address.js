import React from 'react';

const Address = (props) => {
  const address = props.address || {};
  return (
    <div>
      <p>{address.line1}</p>
      <p>{address.town}</p>
      <p>{address.county}</p>
      <p>{address.country}</p>
    </div>
  );
}

Address.propTypes = {
  address: React.PropTypes.object,
};

export default Address;
