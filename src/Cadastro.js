import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css';
import Header from './Header';
import Footer from './Footer';
import Alert from 'react-bootstrap/Alert';
import $ from 'jquery';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setDescricao = this.setDescricao.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.state = {
      nome: '', 
      descricao: '', 
      items: [],
      focused: false,
      input: '',
      msg:'',
      style: '',
      show: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  enviaForm(event){
    event.preventDefault();
    
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({name: this.state.nome, description: this.state.descricao, tags: this.state.items, status: this.state.status}),
      headers: new Headers({
        'Content-type':'application/json'
      })
    };

    fetch('http://localhost:8080/apis', requestInfo)
      .then(response => {
        if(response.ok){
          this.setState({nome:'',descricao:'',items:[], status:'', msg:' API cadastrada com sucesso!', show: true});          
          return response.text();
        } 
        else {
          this.setState({nome:'',descricao:'',items:[], status:''});
          this.setState({msg:'Não foi possível fazer o login'});
        }
      })
      .then(token => {
        console.log(token);
      });
  }

  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setDescricao(evento){
    this.setState({descricao:evento.target.value});
  }

  setStatus(evento){
    this.setState({status:evento.target.value});
  }

  setTags(evento){
    this.setState({tags:evento.target.value});
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }
 
  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tags: newTags });
  }

  handleInputChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if ( evt.keyCode === 13 ) {
      const {value} = evt.target;
      
      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }));
    }

    if ( this.state.items.length && evt.keyCode === 8 && !this.state.input.length ) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1)
      }));
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index)
      }));
    }
  }

  render() {
    const styles = {
      container: {
        border: '1px solid #ddd',
        padding: '5px',
        borderRadius: '5px',
      },

      items: {
        display: 'inline-block',
        padding: '2px',
        border: '1px solid blue',
        fontFamily: 'Comic Sans MS, sans-serif',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer'
      },

      input: {
        outline: 'none',
        border: 'none',
        fontSize: '14px',
        fontFamily: 'Comic Sans MS, sans-serif'
      }
    };

    $(document).on("keypress", "form", function(event) { 
      return event.keyCode !== 13;
    });

    const handleHide = () => this.setState({ show: false });
    
    return (
      <div className="body" style={{marginBottom:'50px'}}>
        <Header />

        <div className="container">

          <h3 className="my-4" style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Cadastro de API</h3>
          
          <Alert show={this.state.show} variant="success" className="col-lg-10">
            <Alert.Heading style={{marginBottom: '25px'}}>
              <div style={{float:'left'}}>{this.state.msg}</div>
              <div onClick={handleHide} style={{float:'right', cursor: 'pointer'}}>X</div>
            </Alert.Heading>
          </Alert>
          
          <div className="row">            
            <div className="col-lg-10 col-md-10 col-sm-10">              
              <div className="card h-100">                
                <div className="card-body">
                  <form onSubmit={this.enviaForm} method="post" id="form">

                    <div className="form-group">
                                          
                      <label className="col-md-2 control-label" for="Nome">Nome:</label>                      
                      <div className="col-md-12">
                        <input id="nome" value={this.state.nome} onChange={this.setNome} style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} name="Nome" placeholder="" className="form-control input-md" required="true" type="text"></input>
                      </div>
                      
                      <label className="col-md-2 control-label" for="Descricao">Descrição:</label>                      
                      <div className="col-md-12">
                        <textarea value={this.state.descricao} onChange={this.setDescricao} style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} className="form-control" rows="5" required="true" id="Descricao"></textarea>
                      </div>
                      
                      <label style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} className="col-md-2 control-label" for="Status">Status: </label>  
                      <div className="col-md-12">
                        <select className="form-control" required="true" onChange={this.setStatus}>
                          <option selected value="0">Selecione o Status</option>
                          <option value="Ativa">Ativa</option>
                          <option value="Inativa">Inativa</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} className="col-md-2 control-label" for="Nome">Tags:</label>  
                        <div className="col-md-12">                      
                          <label>
                            <ul style={styles.container} className="list-group">
                              {
                                this.state.items.map((item, i) => 
                                <li key={i} style={styles.items} className="list-group-item" onClick={this.handleRemoveItem(i)}>
                                  {item}
                                  <i className="fa fa-minus-circle" style={{float: 'right', margin: '3px'}}></i>
                                </li>
                              )}
                              <input
                                className="form-control"
                                style={styles.input}
                                value={this.state.input}
                                onChange={this.handleInputChange}
                                onKeyDown={this.handleInputKeyDown} />
                            </ul>
                          </label>
                        </div>                    
                      </div>

                      <button className="btn btn-info float-right" type="submit"><a style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Cadastrar</a></button>
                  
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <Footer />
      </div>
    );
  }
}

export default Cadastro;
