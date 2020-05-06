import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component{
    render () {
        const searchResults = this.props.props.searchResults;
        if(!searchResults || searchResults.length===0){
            return (
                <div className="Parent-grid">
                    <h4 className='text-center'>No result found </h4>
                </div>
            )
        }
        else{
            return (
                <div className="Parent-grid">
                    <div className="grid-container">
                        <h1 className='search-result'>Search Results:</h1>
                        {
                            searchResults.map(result =>
                                <div key={result.imdbID} className="grid-item">
                                    <img height="400px" src={result.Poster} alt={result.Title}/>
                                    <div className="Movie-meta">
                                        <div className="Movie-title">{result.Title}</div>
                                        <div className="Delete-movie" align="right" onClick={()=>{
                                            this.props.removeMovie(result)
                                        }}>&#10005;</div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            )
        }

    }

}
export default SearchResults