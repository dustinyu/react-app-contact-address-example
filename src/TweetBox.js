import React, { Component } from 'react';

const MAXCHARS = 140;

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  render() {
    return (
      <div className="tweetbox">
        <textarea
          value={this.state.message}
          placeholder="Enter your message here"
          onChange={this.handleChange}
          cols="40"
        />
        <p className="charsRemaining">
          {MAXCHARS - this.state.message.length} characters remaining
        </p>
        <button onClick={this.handleSend}>Send</button>
      </div>
    );
  }

  handleChange(e) {
    const charsRemaining = MAXCHARS - e.target.value.length;
    if (charsRemaining < 0) {
      return;
    }

    this.setState({
      message: e.target.value,
    });
  }

  handleSend() {
    this.props.onSend(this.state.message);
  }
}

TweetBox.propTypes = {
  onSend: React.PropTypes.func.isRequired,
};

export default TweetBox;
