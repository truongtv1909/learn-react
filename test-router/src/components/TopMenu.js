import React from 'react';
import {Link} from 'react-router-dom'

export default function TopMenu(){
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" >
    <ul className="navbar-nav">
        <li className="nav-item active">
            <Link to="/" className="nav-link" ><h4>Home</h4></Link>
        </li>
        <li className="nav-item active">
        <Link to="/products" className="nav-link" ><h4>Products</h4></Link>
        </li>
        <li className="nav-item active">
            <Link to="/about" className="nav-link" ><h4>About</h4> </Link>
        </li>
        <li className="nav-item active">
            <Link to="/contact" className="nav-link" ><h4>Contact</h4></Link>
        </li>
    </ul>
    </div>
</nav>
);
}

