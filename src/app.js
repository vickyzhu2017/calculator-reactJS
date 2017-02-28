import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootApp from './containers/RootApp';


let rootEL = document.getElementById('app');
console.log(Provider);

render(
	<Provider store = { store }>
		<RootApp/>
	</Provider>,
	rootEL
);