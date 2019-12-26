import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from '../src/components/Search/Search';
import TerminalList from './components/TerminalList/TerminalList';
import TerminalItem from './components/TerminalList/TerminalItem/TerminalItem';
import Map from './components/Map/Map';

class App extends React.Component {
    state = {
        List: [],
        startcity:"Rivne",
        searchCity: ""
    };


    componentDidMount() {
        //const {city}= this.state;
        console.log("componentDidMount")
        fetch(
            `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${this.state.startcity}`
        )

            .then(response => response.json())
            .then(({ devices }) => {
                this.setState({
                    List: devices
                })
            })
    }
    Request = () =>{
       
    }

    searchTerminals = (i) => {
        console.log("searchTerminals ", i)
        fetch(
            `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${i}`
        )

            .then(response => response.json())
            .then(({ devices }) => {
                console.log("Devices: ", devices )
                this.setState({
                    List: devices
                })
            })
        
    }

    render() {
        console.log("State = ", this.state)
        return (
            <div className="main">
                <h2>
                    Search nearest terminal of Privat Bank
                </h2>
                <Search searchTerminals={this.searchTerminals}></Search>
                <TerminalList TerminalList={this.state.List} />
                <Map></Map>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

