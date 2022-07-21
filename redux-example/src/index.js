import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers); //store 생성

console.log(store.getState());
store.subscribe( () => console.log( store.getState() ) )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// ReactDOM.render(<App/>, document.getElementById('root'));
// error: does not support react 18