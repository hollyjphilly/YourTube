import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(e) {
        this.setState({ searchTerm: e.currentTarget.value })
    }

    render() {
        return <>
            <form onSubmit={this.handleSubmit} className="center-masthead">
                <div id="search-container">
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Search"
                        onChange={this.update}
                        className="search-input"
                    />
                </div>
                <button className="search-btn"><FontAwesomeIcon icon={['fa', 'search']} className="search-icon"/></button>
            </form>
        </>
    }

} 

export default SearchBar;