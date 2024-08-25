import React from 'react'

const Navbar = ({ data }) => {
    return (
        <nav style={{ zIndex: 2000 }} className="navbar bg-dark position-fixed top-0 start-0 end-0">
            <div className="container">
                <div className="col-12 text-center col-md text-md-start">
                    <a className="navbar-brand text-white">Movies Flix</a>
                </div>
                <div className="col-12 col-md-auto ms-auto">
                    <form className="position-relative" role="search">
                        <input onInput={data.handleSearch} style={{ paddingLeft: '2.3rem' }} className="form-control shadow-none outline-none border-0" type="search" placeholder="Search By Movie" aria-label="Search" />
                        <span className="position-absolute searchDiv material-symbols-rounded">search</span>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;