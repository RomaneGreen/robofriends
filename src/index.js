import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import Card from './Card'

ReactDOM.render(<Card />, document.getElementById('root'));


serviceWorker.unregister();
