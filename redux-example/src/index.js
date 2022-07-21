import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions'

import { Provider } from 'react-redux'

const store = createStore(reducers); //store 생성
/*
    console.log(store.getState());
    const unSubscribe = store.subscribe( () => console.log( store.getState() ) )

    store.dispatch(actions.increment());
    store.dispatch(actions.decrement());
    store.dispatch(actions.setColor([200,200,200]));

    unSubscribe(); //listener switch
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// ReactDOM.render(<App/>, document.getElementById('root'));
// error: does not support react 18