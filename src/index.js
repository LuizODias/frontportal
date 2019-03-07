import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './Cadastro';
import Forum from './Forum';
import Api from './Api';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	(<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/cadastro" component={Cadastro}/>
			<Route path="/forum" component={Forum}/>
			<Route path="/api/:name" component={Api}/>
		</Switch>
	</BrowserRouter>),
	document.getElementById('root')
);

