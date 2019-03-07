import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './fontawesome/css/all.min.css';

class Footer extends Component{
	render(){
		return(
			<div className="footer py-1 bg-dark">
				<div className="container">
					<p className="m-0 text-center text-white">Copyright &copy; Direitos Reservados - Algar Telecom 2019</p>
				</div>
		  </div>
		);
	}
}
export default Footer;