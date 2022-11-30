import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <input type='checkbox' className='toDoBox'/>
        <button className='delButton'>Delete</button>
      </div>
    );
  }
}

export default Todo;
