import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
      return (
            <div>
               <nav className=" text-light navbar navbar-expand-sm navbar-light bg-info text-light mb-5">
                     <Link className="navbar-brand text-light" to="/">REACT+GIT API </Link>
                     <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                         aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="collapsibleNavId">
                           <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                 <li className="nav-item active">
                                       <Link className="nav-link text-light " to="/users">Users <span className="sr-only">(current)</span></Link>
                                 </li>
                           </ul>
                     </div>
               </nav>   
            </div>
      )
}

export default Navbar
