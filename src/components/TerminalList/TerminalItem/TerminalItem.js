import React, { Component } from 'react';
import './TerminalItem.css';

class TerminalItem extends React.Component {

  
    render() {
      return <h2>{this.props.fullAddressUa}</h2>;
    }
  }
  
  export default TerminalItem;