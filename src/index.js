import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import robots from './robots'
import App from './App'
import CardList from './CardList'
import './App.css'

ReactDOM.render( <div> <App /> </div>, document.getElementById('root'));


serviceWorker.unregister();
