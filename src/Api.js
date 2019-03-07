import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './fontawesome/css/all.min.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Api extends Component{
	render(){
		return(
            <div>
                <Header />
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#17a2b8"}}>                         
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <div styles={{float: 'left'}}>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#"><a style={{color: '#3a3a3a'}}> Início </a></Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="#"><a style={{color: '#3a3a3a'}}> Guia </a></Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="#"><a style={{color: '#3a3a3a'}}> Referências </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
                <Footer/>
            </div>
		);
	}
}
export default Api;