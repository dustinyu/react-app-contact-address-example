import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ContactListContainer from './ContactListContainer';
import ContactContainer from './ContactContainer';
import TweetBox from './TweetBox';
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const TweetBoxWrapper = () => {
  const sendMessage = msg => console.log(`Sending message: ${msg}`);

  return (
    <div>
      <h2>TweetBox</h2>
      <TweetBox onSend={sendMessage} />
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tweet">Tweet</Link></li>
        <li><Link to="/contacts">Contacts (delayed 1500ms)</Link></li>
        <li><Link to="/contact/1">Contact 1</Link></li>
        <li><Link to="/contact/2">Contact 2</Link></li>
        <li><Link to="/contact/3">Contact 3</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/tweet" component={TweetBoxWrapper}/>
      <Route path="/contacts" component={ContactListContainer} />
      <Route path="/contact/:contactId" component={ContactContainer} />
    </div>
  </Router>
);

export default App;
