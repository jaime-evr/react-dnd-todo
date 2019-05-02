import React, { Component } from 'react';
import './styles/style.scss';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

class TodoList extends Component {
  state = { todoList: [], todoIds: [] }

  addItem = todo => {
    this.setState({
      todoList: [todo, ...this.state.todoList],
      todoIds: [todo.id, ...this.state.todoIds]
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
      todoList: this.state.todoList.filter(todo => todo.id !== id),
      todoIds: this.state.todoIds.filter(todoId => todoId !== id)
    });
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    const newTodoIds= Array.from(this.state.todoIds);

    newTodoIds.splice(source.index, 1);
    newTodoIds.splice(destination.index, 0, draggableId)

    this.setState({todoIds: newTodoIds});
  }

  render() {
    let todos = this.state.todoIds.map(id => {
      return this.state.todoList.find(todo => todo.id === id)
    });

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <TodoForm addItem={this.addItem}/>
        <Droppable droppableId={this.props.droppableId}>
          {provided => (
            <div
              ref={provided.innerRef}
              className={this.state.todoList.length ? "todo-list" : ""}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <TodoItem key={todo.id}
                  toggleComplete={() => this.toggleComplete(todo.id)}
                  handleDelete={() => this.handleDelete(todo.id)}
                  index={index}
                  todo={todo} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default TodoList;
