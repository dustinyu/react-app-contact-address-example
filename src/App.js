import React, { Component } from 'react';
import Contact from './Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.tellMeWhenExpandedIsHit = this.tellMeWhenExpandedIsHit.bind(this);
  }

  render() {
    const mockAddresses = [
      {
        line1: '16 The Harbor',
        town: 'Newport',
        county: 'Gwent',
        country: 'Wales'
      },
      {
        line1: '5 The Villas',
        town: 'Stourbridge',
        county: 'Devon',
        country: 'England'
      }
    ];

    return (
      <div className="App">
        <Contact
          name="Peter Munro"
          address={mockAddresses[0]}
          email="peter@petermunro.org"
          handleExpanded={this.tellMeWhenExpandedIsHit}
        />
        <Contact
          name="Dave Mallon"
          address={mockAddresses[1]}
          email="dave@example.com"
        />
      </div>
    );
  }

  tellMeWhenExpandedIsHit(component, isExpanded) {
    console.log(`Component ${component} ${isExpanded ? "is" : "is not"} expanded`);
  }

}

export default App;
