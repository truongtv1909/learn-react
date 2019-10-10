import React from 'react';

function  Header() {
    return <div className="header">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="test" >Navbar</a>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="test">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="test">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}
export default Header;