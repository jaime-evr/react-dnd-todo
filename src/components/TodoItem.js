import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <span className="todo-text"
          style={{ textDecoration: this.props.todo.complete ? 'line-through' : '' }}
          onClick={this.props.toggleComplete}>
          {this.props.todo.text}
        </span>
        <span className="drag-box"><i className="fa fa-bars"></i></span>
        <button className="delete is-small btn-delete" onClick={this.props.handleDelete}></button>
      </div>
    )
  }
}

export default TodoItem;
