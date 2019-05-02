import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList droppableId={'1'} />, document.getElementById('schedule'));
ReactDOM.render(<TodoList droppableId={'2'}/>, document.getElementById('todo'));
ReactDOM.render(<TodoList droppableId={'3'}/>, document.getElementById('goals'));
ReactDOM.render(<TodoList droppableId={'4'}/>, document.getElementById('motivation'));
ReactDOM.render(<TodoList droppableId={'5'}/>, document.getElementById('happiness'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
