import React, { Component } from 'react'; 
import "../Styles/main.css";
import { Link } from 'react-router-dom';
class Navbar extends Component {
    state = {
    };

   
    render() {
        return (
               <nav className="navbar fixed-top navbar-expand-sm navbar-light bg p-4 text-white">
                  <div className="container d-flex ">
                    <div className="div ">
                    <Link class="navbar-brand fw-bold fs-3 text-white" to="/">START FRAMEWORK</Link>
                     </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsibleNavId"
                      aria-controls="collapsibleNavId"
                      aria-expanded="false"
                     aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                        </button>
                   <div className="container">
                   <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link text-white mx-1  fs-5  text-uppercase active" to="about" aria-current="page">About <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white  fs-5 mx-1 text-uppercase " to="portfolio" aria-current="page">Portfolio <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-white  fs-5 mx-1 text-uppercase " to="contact" aria-current="page">Contact <span className="visually-hidden">(current)</span></Link>
                            </li>
                          
                            
                        </ul>
                       
                    </div>
                   </div>
                  
                 </div>
               </nav>
               
               
               
        );
    }
}

export default Navbar; 
