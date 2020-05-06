import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import { withRouter  } from "react-router-dom";
import axios from 'axios';

import logo from './search_television.jpg';
import './App.css';
import SearchForm from "./components/SearchForm";
import SearchResults from './components/searchResults'

class App extends Component{
    constructor () {
        super();
        this.state = {
            movieTitle: "",
            searchResults: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeMovie = this.removeMovie.bind(this);
    }

    handleSubmit = async props => {
        this.setState({
            movieTitle:props
        });
        const res = await axios.get(`https://www.omdbapi.com/?s=${props}&apikey=505ad4d2`);
        const results = res.data.Search;
        this.setState({ searchResults: results });
        this.props.history.push('/search');
    };
    removeMovie = removedMovie => {
        const  newResult = this.state.searchResults.filter(movie=>movie !== removedMovie);
        this.setState({
            searchResults:newResult
        })
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div className="app">
                        <header className="App-header">
                            <p>Confused which movie to watch next. Search here !!!</p>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <SearchForm searchObj={this.state} onSubmit={this.handleSubmit}/>
                        </header>
                    </div>
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchResults props={this.state} removeMovie={this.removeMovie}/>
                )}/>
            </div>
        );
    }
}

export default withRouter(App);
