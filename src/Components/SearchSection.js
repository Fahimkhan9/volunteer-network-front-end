import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import './SearchSection.css'
function SearchSection() {
    return (
        <div>
            <h1 className="text-center text-uppercase display-4">I grow by helping people</h1>
            <form className="form-group text-center form-search">
                <input type="text" className="form-control input-search"/>
                <button className="btn btn-primary btn-search" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchSection
