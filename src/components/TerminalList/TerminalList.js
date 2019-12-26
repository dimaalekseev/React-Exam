import React, { Component } from 'react';
import './TerminalList.css';
import TerminalItem from './TerminalItem/TerminalItem';

const TerminalList = ({ TerminalList }) => {

    console.log("TerminalList =>>>>", TerminalList);
    const Item = TerminalList.map(item => {
      return <TerminalItem fullAddressUa={item.fullAddressUa}></TerminalItem>;
    });
    return <div className="container">{Item}</div>;
  };

export default TerminalList;


