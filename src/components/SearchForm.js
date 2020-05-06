import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render () {
        return (
            <form className="Search-form" onSubmit={(event)=>{
                event.preventDefault();
                this.props.onSubmit(event.target.elements.movieTitle.value)
            }}>
                <input type="text"
                       name="movieTitle"
                       className="Search-input"
                       placeholder="Search Movie..."
                />
                <button className="Search-button">Submit</button>
            </form>
        );
    }
}

export default SearchForm;
