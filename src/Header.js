import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin';


class Header extends Component{

	constructor(props) {
		super(props);	    
		this.enviaForm = this.enviaForm.bind(this);
		this.setSearch = this.setSearch.bind(this);
		this.state = {search: ''};
	}

	enviaForm(event){
		event.preventDefault();
    
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({name: this.state.search}),
      headers: new Headers({
        'Content-type':'application/json'
      })
    };

    fetch('http://localhost:8080/apis', requestInfo)
      .then(response => {
        if(response.ok){
          this.setState({search:''});
          return response.text();
        } 
        else {
          this.setState({search:''});
          this.setState({msg:'Não foi possível fazer o login'});
        }
      })
      .then(token => {
        console.log(token);
      });
	}

	setSearch(evento){
		this.setState({search: evento.target.value});
	}

	render(){
		return(		
			<div className="header">
				<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#88d808"}}> 
					<Link to="/"><img className="card-img-top" src={require('./img/algar.png')} alt=""></img></Link>       
					<div className="container">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/"><a style={{color: '#3a3a3a'}}> Início </a></Link>
								</li>

								<li className="nav-item">
									<Link className="nav-link" to="/cadastro"><a style={{color: '#3a3a3a'}}> Cadastro </a></Link>
								</li>

								<li className="nav-item">
									<Link className="nav-link" to="/forum"><a style={{color: '#3a3a3a'}}> Fórum </a></Link>
								</li>

								<li className="nav-item">
									<ModalLogin />
								</li>

								<form className="form-inline my-2 my-lg-0">
									<input className="form-control mr-sm-2" type="text" placeholder="Pesquisar" aria-label="Search" value={this.state.search} onChange={this.setSearch.bind(this)} />											
									<button className="btn btn-info my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
								</form>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;