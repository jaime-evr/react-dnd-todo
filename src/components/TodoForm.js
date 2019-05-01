import React, { Component } from 'react';
import shortid from 'shortid';

class TodoForm extends Component {
  state = { text: '', completed: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({ text: '' } )
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="field">
          <input className="input" name="text" value={this.state.text}
            type="text"
            onChange={this.handleChange}
            placeholder="Add item" />
        </div>
      </form>
    );
  }
}

export default TodoForm;
