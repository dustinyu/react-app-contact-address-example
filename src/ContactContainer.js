import React, { Component, PropTypes } from 'react';
import Contact from './Contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: null,
      error: null
    };
  }

  fetchData(contactId) {
    const timerId = setTimeout(() => {
      this.setState({error: 'Request timed out'});
    }, 2000);

    function always() {
      clearTimeout(timerId);
    }

    this.setState({ error: 'Loading...' });

    fetch(`http://localhost:8060/api/contact/${contactId}`)
      .then(response => response.json())
      .then(json => this.setState({contact: json, error: null}))
      .catch(ex => this.setState({ error: ex.message }))
      .then(always, always);
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.contactId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.contactId !== nextProps.match.params.contactId) {
      // User requested a different contact
      this.fetchData(nextProps.match.params.contactId);
    }
  }

  render() {
    return (
      <div>
        <p>{ this.state.error ? this.state.error : null }</p>
        <Contact {...this.state.contact} />
      </div>
    );
  }
}

ContactContainer.propTypes = {
  contactId: PropTypes.number,
};

export default ContactContainer;
