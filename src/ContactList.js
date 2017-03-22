import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const contactComponents = contacts.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        address={contact.address}
        email={contact.email}
      />
    ));
    return (
      <div>
        { contactComponents }
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ]).isRequired,
      name: React.PropTypes.string.isRequired,
      address: React.PropTypes.object,
      email: React.PropTypes.string,
    })
  ),
};

export default ContactList;
