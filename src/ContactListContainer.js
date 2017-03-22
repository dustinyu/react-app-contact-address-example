import React, { Component } from 'react';
import ContactList from './ContactList';

class ContactListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:8060/api/contacts')
      .then(response => response.json())
      .then(json => this.setState({contacts: json}))
      .catch(ex => {
        this.setState({ error: ex.message })
      });
  }

  render() {
    return (
      <div>
        <p>{ this.state.error ? this.state.error : null }</p>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default ContactListContainer;
