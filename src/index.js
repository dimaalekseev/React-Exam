import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from '../src/components/Search/Search';
import TerminalList from './components/TerminalList/TerminalList';
import Map from './components/Map/Map';

const App = () => {
    return (
        <div className="main">
            <Search />
            <TerminalList/>
            <Map/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

