import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div id="myTodoForm">
        <form>
            <input type="text" id="newTask"/>
            <input type="submit" id="addToDo" value="Add"/>
        </form>
      </div>
    );
  }
}

export default NewTodo;
