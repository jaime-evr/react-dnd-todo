import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';


class TodoItem extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.todo.id} index={this.props.index}>
        {provided => (
          <div
            className="todo-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <span className="todo-text"
              style={{ textDecoration: this.props.todo.complete ? 'line-through' : '' }}
              onClick={this.props.toggleComplete}>
              {this.props.todo.text}
            </span>
            <span
              className="drag-box"
              {...provided.dragHandleProps}
            ><i className="fa fa-bars"></i></span>
            <button className="delete is-small btn-delete" onClick={this.props.handleDelete}></button>
          </div>
        )}
      </Draggable>
    )
  }
}

export default TodoItem;
