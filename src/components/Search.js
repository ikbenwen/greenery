import React from 'react';
import {render} from "@testing-library/react";
import './Search.css';
import axios from 'axios';

class Search extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
        };

        this.cancel = '';
    }

    fetchSearchResults = (updatedPageNo = '', query) => {
        const token = "20310953-81227b282e6055f395eba7999";
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://pixabay.com/api/?key=${token}&q=${query}${pageNumber}`;

        if ( this.cancel ) {
             this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        } )
            .then(res => {
                const resultNotFoundMsg = ! res.data.hits.length
                                        ? 'there are no more search results '
                                        :   '';
                this.setState({
                    results: res.data.hits,
                    message: resultNotFoundMsg,
                    loading: false
                })
                console.log(res.data)
            })
            .catch( error => {
                if ( axios.isCancel(error) || error ) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data'
                    })
                }
            } )
    };

    handleOnInputChange = ( event ) => {
        const query = event.target.value;
        this.setState( {query: query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
    //             results: {},
    //             message: '',
    //             totalPages: 0,
    //             totalResults: 0
    //         }
    //         );
    //     } else {
    //         this.setState( {
    //             query,
    //             loading: true,
    //             message: '' },
    //             () => {
    //             this.fetchSearchResults( 1, query );
    //         } );
    //     }
    };

    render() {
        const { query } = this.state;
        // console.log(this.state)
        return (
            <div className="container">
                {/*	Heading*/}
                <h2 className="heading">Let's find some crops</h2>
                {/* Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                        />
                    <i className="fas fa-search search-icon" aria-hidden="true" />

                </label>
                    </div>
        )
    }
}


export default Search;
