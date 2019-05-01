import React, { Component } from 'react';
import shortid from 'shortid';

import './styles/style.scss';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

class TodoList extends Component {
  state = { todoList: [] }

  addItem = todo => {
    this.setState({
      todoList: [todo, ...this.state.todoList]
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (id === todo.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    });
  }

  handleDelete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
  }

  onDragEnd = result => {
    // todo: implement
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={1}>
          {provided => (
            <div innerRef={provided.innerRef} {...provided.droppableProps}>
              <TodoForm addItem={this.addItem}/>
              <div className={this.state.todoList.length ? "todo-list" : ""}>
                {this.state.todoList.map(todo => (
                  <TodoItem key={todo.id}
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    handleDelete={() => this.handleDelete(todo.id)}
                    todo={todo} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}


export default TodoList;
