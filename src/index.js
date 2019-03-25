import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import App from './containers/App'
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render( <div><Provider store={store}> <App /> </Provider></div>, document.getElementById('root'));


serviceWorker.unregister();
