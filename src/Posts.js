import React, { Component } from 'react';

class Posts extends Component {
    handleUpvote = (post, key) => {        
    }

    handleDownvote = (post, key) => {        
    }

    render() {
        // let posts = this.props.posts;
        // let _this = this;

        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom:'20px'}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <section class="container">						
                                <section class="row clearfix">
                                    <section class="col-md-12 column">															
                                        <div class="row clearfix">
                                            <div class="col-md-12 column">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <section class="panel-title">
                                                            <time class="pull-right">
                                                                <i class="fa fa-calendar"></i> 14-02-2019 , <i class="fa fa-clock-o"></i> 14:35
                                                            </time>
                                                            <section class="pull-left" id="id">
                                                                <abbr title="count of posts in this topic">#1</abbr>
                                                            </section>
                                                        </section>
                                                    </div>
                                                    <section class="row panel-body">
                                                        <section class="col-md-9">
                                                            <h2> <i class="fa fa-smile-o"></i> Pergunta aqui?</h2>
                                                            <h5>CONTEÚDO AQUI</h5>
                                                        </section>
                                                                        
                                                        <section id="user-description" class="col-md-3 ">
                                                            <section class="well">                                                                
                                                                <figure>
                                                                    <img class="img-rounded img-responsive" src={require("./img/user.png")} width="200" height="200" alt="User avatar" />
                                                                    <figcaption class="text-center">Senhor... <br /><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i> </figcaption>
                                                                </figure>
                                                            </section>
                                                        </section>															
                                                    </section>
                                                    <div class="panel-footer">
                                                        <div class="row">
                                                            <section class="col-md-6">
                                                                <i class="far fa-smile "></i><a href="#"> Like </a>| 
                                                                <i class="far fa-angry "></i><a href="#"> Deslike </a>
                                                            </section>
                                                            <section class="col-md-6">                                                                
                                                                <i class="fa fa-mail-reply"></i><a href="#"> Responder </a>|
                                                                <i class="fas fa-edit "></i><a href="#"> Editar Post </a>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;