import React, { Component } from 'react';
import ContactListContainer from './ContactListContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.tellMeWhenExpandedIsHit = this.tellMeWhenExpandedIsHit.bind(this);
  }

  render() {
    const mockContacts = [
      {
        name: "Peter Munro",
        address: {
          line1: '16 The Harbor',
          town: 'Newport',
          county: 'Gwent',
          country: 'Wales'
        },
        email: "peter@petermunro.org",
      },
      {
        name: "Dave Mallon",
        address: {
          line1: '5 The Villas',
          town: 'Stourbridge',
          county: 'Devon',
          country: 'England'
        },
        email: "dave@example.com",
      }
    ];

    return (
      <div className="App">
        <ContactListContainer contacts={mockContacts} />
      </div>
    );
  }

  tellMeWhenExpandedIsHit(component, isExpanded) {
    console.log(`Component ${component} ${isExpanded ? "is" : "is not"} expanded`);
  }

}

export default App;
