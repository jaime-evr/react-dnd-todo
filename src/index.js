import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('schedule'));
// ReactDOM.render(<TodoList />, document.getElementById('todo'));
// ReactDOM.render(<TodoList />, document.getElementById('goals'));
// ReactDOM.render(<TodoList />, document.getElementById('motivation'));
// ReactDOM.render(<TodoList />, document.getElementById('happiness'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
