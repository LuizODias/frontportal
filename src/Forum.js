import React, { Component } from 'react';
import './css/bootstrap/css/bootstrap.css';
import './post.scss';
import './font-awesome/css/font-awesome.min.css';
import Header from './Header';
import Footer from './Footer';
import AddPost from './AddPost';
import Posts from './Posts';


class Forum extends Component{

	constructor() {
	  super();
	  this.state = {lista: []};
	}

	render(){
    return (
      <div className="body">
        <Header />

        <div className="container">
					<h3 style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} className="my-4"> Discussões </h3>					
					<Posts />
					<AddPost />
				</div>
				
        <Footer />
      </div>
	  )
  }
}
export default Forum;