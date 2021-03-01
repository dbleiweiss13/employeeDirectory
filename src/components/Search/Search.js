import React from "react"

function Search(props) {

    return (
        <nav className="navbar navbar-light bg-light" >
            <div className="container-fluid">
                <p className="navbar-brand">Employee Directory</p>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleInputChange}/>
                    <button className="btn btn-outline-success" type="submit" onClick={props.handleSearch}>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Search;