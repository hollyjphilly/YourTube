import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar(props) {
    const [query, setQuery] = useState("")
    const searchBox = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (props.match.path === "/videos/search") {
            props.history.push(`/videos/search?query=${query}`)
            props.searchVideos(query)
            setQuery("")
        } else {
            props.history.push(`/videos/search?query=${query}`)
            setQuery("")
        }
    
    }
    
    function update(e) {
        setQuery(e.currentTarget.value)
    }
    
    function toggleFocus() {
        searchBox.current.classList.toggle('typing')
    }

    return <>
        <form onSubmit={handleSubmit} className="center-masthead">
            <div id="search-container" ref={searchBox}>
                <input
                    
                    type="text"
                    value={query}
                    placeholder="Search"
                    onChange={update}
                    className="search-input"
                    onFocus={toggleFocus}
                    onBlur={toggleFocus}
                />
            </div>
            <button className="search-btn"><FontAwesomeIcon icon={['fa', 'search']} className="search-icon"/></button>
        </form>
    </>

} 

export default SearchBar;