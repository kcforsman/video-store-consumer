import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
       <button onClick={this.reportSelection} className="button">Select { this.props.field }</button>
    )
  }

}


export default SelectButton;
