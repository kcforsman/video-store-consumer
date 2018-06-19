import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SelectButton.css';

class SelectButton extends Component {

  static propTypes = {
    field: PropTypes.string.isRequired,
    reportSelection: PropTypes.func.isRequired
  }

  reportSelection = () => {
    this.props.reportSelection()
  }

  render() {

    return (
       <button onClick={this.reportSelection}>Select { this.props.field }</button>
    )
  }

}


export default SelectButton;
