import React from 'react';
// import { render } from "@testing-library/react";
import './Styles/Search.css';
import axios from 'axios';
import Loader from '../assets/loader.gif'
import PageNavigation from "./PageNavigation";

//Juiste url is:`https://trefle.io/api/v1/plants/search?&q=${query}&token=${token}&page=${pageNumber}`
//trefle token:'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc'

//temporary url:;
//temporary token:;

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            totalResults: 0,
            totalPages: 0,
            currentPageNo: 0,
        };

        this.cancel = '';
    }

    getPageCount = (total, denominator) => {
        const divisible = 0 === total % denominator;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor(total / denominator) + valueToBeAdded;
    }

    fetchSearchResults = (updatedPageNo = '', query) => {
        const token = "20310953-81227b282e6055f395eba7999";
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://pixabay.com/api/?key=${token}&q=${query}${pageNumber}`;

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                const total = res.data.total;
                const totalPagesCount = this.getPageCount(total, 20);
                const resultNotFoundMsg = !res.data.hits.length
                                                                ? 'there are no more search results '
                                                                : '';
                this.setState({
                    results: res.data.hits,
                    message: resultNotFoundMsg,
                    totalResults: total,
                    totalPages: totalPagesCount,
                    currentPageNo: updatedPageNo,
                    loading: false
                })
                // console.log(res.data)
            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data'
                    })
                }
            })
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
        } else {
            this.setState({ query, loading: true, message: ''}, () => {
                this.fetchSearchResults(1, query);
            });
        }
    };

    handlePageClick = ( event, type ) => {
        event.preventDefault();
        const updatePageNo = 'prev' === type
            ? this.state.currentPageNo - 1
            : this.state.currentPageNo + 1;

        if ( ! this.state.loading ) {
            this.setState( { loading: true, message: '' }, () => {
                this.fetchSearchResults( updatePageNo,  this.state.query );
            })
        }

    };

    renderSearchResults = () => {
        const { results } = this.state;

        if ( Object.keys( results ).length && results.length ) {
            return (
                <div className="results-container">
                    { results.map( result => {
                        return (
                            <a key={ result.id } href={ result.previewURL } className="result-item">
                                {/*<a key={ result.id } href={ result.links.self } className="result-item">*/}
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={ result.previewURL } alt={`${result.user} image`} />
                                    {/*<img className="image" src={ result.image_url } alt={`${result.common_name} image`}/>*/}

                                </div>
                            </a>
                        )
                    } ) }

                </div>
            )
        }
    };

    render() {
        const { query, loading, message, currentPageNo, totalPages  } = this.state;

        const showPrevLink = 1 < currentPageNo;
        const showNextLink = totalPages > currentPageNo;
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

                    {/*error*/}
                { message && <p className="message">{ message }</p>}

                    {/*Loader*/}
                    <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide'}`} alt="loader"/>

                    {/*Navigation*/}
                    <PageNavigation
                        loading={ loading }
                        showPrevLink={ showPrevLink }
                        showNextLink={ showNextLink }
                        handlePrevClick={ (event) => this.handlePageClick('prev', event )}
                        handleNextClick={ (event) => this.handlePageClick('next', event )}
                    />

                    {/*result*/}
                    { this.renderSearchResults() }

                {/*Navigation*/}
                <PageNavigation
                    loading={ loading }
                    showPrevLink={ showPrevLink }
                    showNextLink={ showNextLink }

                    handlePrevClick={ (event) => this.handlePageClick('prev', event)}
                    handleNextClick={ (event) => this.handlePageClick('next', event)}
                />

                    </div>
        )
    }
}


export default Search;
