import React, {Component} from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";

import './SearchForm.css';

class SearchForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movieTitle: "",
            searchResults: []
        // {"Title": "","imdbID":"", "Poster": ""}
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const titleText = this.state.movieTitle;
        console.log("movie_title",this.state.titleText);
        axios.get(`http://www.omdbapi.com/?s=${titleText}&apikey=505ad4d2`)
            .then(res =>{
                const results = res.data.Search;
                console.log("res.data",results);
                this.setState({ searchResults: results });
            })
    };

    render () {
        const {movieTitle,searchResults} = this.state;
        return (
            <form className="Search-form" onSubmit={this.handleSubmit}>
                <div>{movieTitle}</div>
                <input type="text"
                       name="movieTitle"
                       className="Search-input"
                       placeholder="Search Movie..."
                       onChange={this.changeHandler}
                />
                <button className="Search-button">Submit</button>
                <div className="Parent-grid">
                    <div className="grid-container">{
                        searchResults.map(result =>
                            <div key={result.imdbID} className="grid-item">
                                <img height="400px" src={result.Poster}/>
                                <div className="Movie-meta">
                                    <div className="Movie-title">{result.Title}</div>
                                    <div className="Delete-symbol" align="right">+</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/*<ul>{searchResults.map(result => <li key={result.imdbID}><Link to={`/${result.imdbID}`}>{result.Title}</Link></li>)}</ul>*/}
            </form>
        );
    }
}

export default SearchForm;
