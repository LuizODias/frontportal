import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

class Body extends Component {

    constructor() {
      super();
      this.state = {lista: [], name:'', description:'', tags:[]};
    }
  

    componentDidMount() {
        fetch('http://localhost:8080/apis')
            .then(response => response.json())
            .then(lista => this.setState({ lista:lista }));
    }
    
  
    render() {
      return (
        <div className="container" style={{marginBottom: 48}}>
        <h3 className="my-4" style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}> API's </h3>

        {
            this.state.lista.map(function(api){
                return (
                    <span>
                        <div className="row">
                            <div className="div-api col-lg-10 col-md-10 col-sm-10" style={{marginBottom:'5px'}}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div>
                                            <Link to={'/api/${api.name}'} activeClassName="current">
                                                <h5 className="card-title" style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}><a> {api.name} </a></h5>
                                            </Link>
                                            
                                            <p className="card-text" styles={{fontSize: '15px', fontFamily: '"Comic Sans MS", cursive, sans-serif'}}> {api.description} </p>
                                            
                                            <div>
                                                <p className="card-text" style={{fontSize: '15px', fontFamily: '"Comic Sans MS", cursive, sans-serif', float: 'left'}}>Tags: {api.tags.join(", ")} </p>
                                                <p className="card-text" style={{fontSize: '15px', fontFamily: '"Comic Sans MS", cursive, sans-serif', float: 'right'}}>Status: {api.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                );
            })
        }

        </div>
      );
    }
  }

  export default Body;