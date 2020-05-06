import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './search_television.jpg';
import './App.css';
import SearchForm from "./components/SearchForm";

function App() {
    return (
        <Router>
            <div className="app">
                <header className="App-header">
                    <p>Confused which movie to watch next. Search here !!!</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <SearchForm/>
                </header>
            </div>
        </Router>
    );
}

export default App;
