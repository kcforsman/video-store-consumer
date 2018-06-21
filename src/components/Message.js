import React, { Component } from 'react';
import './Message.css';

import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="alert-message">
        <p>{ this.props.message }</p>
      </div>
    )
  }

}


export default Message;
