import React, {Component} from 'react';
import Modal from "react-modal";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height				  : '200',
    width 				  : '200',
  }
};


class ModalLogin extends Component {  
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      msg:''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#17a2b8';
    this.subtitle.style.textAlign = 'center';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  enviaLogin(event){
    event.preventDefault();
    
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({user:this.user.value, password:this.password.value}),
      headers: new Headers({
        'Content-type':'application/json'
      })
    };

    fetch('http://localhost:8080/login', requestInfo)
      .then(response => {
        if(response.ok){
          return response.text();
        } 
        else {
          this.setState({msg:'Não foi possível fazer o login'});
        }
      })
      .then(token => {
        console.log(token);
      });
  }
  
  render() {
    return (
      <div style={{marginRight: 9, marginTop: 1}}>
        <button className="btn btn-light my-2 my-sm-0" onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

          <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
          <span>{this.state.msg}</span>
          
          <form onSubmit={this.enviaLogin}>
          	<div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"> <i className="far fa-user" style={{width: '16px'}}></i> </span>
                  <input name="user" className="form-control" placeholder="Usuário" type="text" ref={(input) => this.user = input}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">      
                  <span className="input-group-text"> <i className="fas fa-key"></i> </span>			 	
                  <input name="password" className="form-control" placeholder="Senha" type="password" ref={(input) => this.password = input} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="botao-entrar">
                  <button className="btn btn-success my-2 my-sm-0" onClick={this.closeModal}> Entrar </button>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalLogin;