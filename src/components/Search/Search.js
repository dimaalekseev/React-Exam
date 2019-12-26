import React, { Component } from 'react';
import './Search.css';

class Search extends React.Component {

    state = {
        city: ""
    }

    getCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    ChangeCity = (e) =>{
        e.preventDefault();
        const city = this.state.city;
        this.props.searchTerminals(city);
    }

    render() {
        return (
            <form onSubmit={this.ChangeCity}>
                <input type="text" name="cityUA" placeholder="City" onChange={this.getCity}></input>
                <button onClick={this.ChangeCity}>Search</button>
            </form>
        )
    }
}

export default Search;