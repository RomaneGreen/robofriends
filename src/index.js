import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import App from './containers/App'
import { searchRobots } from './reducers';


const store = createStore(searchRobots) 

ReactDOM.render( <div><Provider store={store}> <App /> </Provider></div>, document.getElementById('root'));


serviceWorker.unregister();
