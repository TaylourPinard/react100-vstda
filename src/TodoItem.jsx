// TODO: add checkbox functionality to edit whether or not a todo is completed

import React, { Component } from 'react';
import EditTodo from './EditTodo';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      createTodoText: this.props.createTodoText,
      createTodoPriority: this.props.createTodoPriority,
      completedTodo: false,
    }
    this.priorityColors = this.priorityColors.bind(this);
  }

  priorityColors(priority){
    let color;
    switch(priority){
      case '1':
        color = 'success';
        break;
      case '2':
        color = 'warning';
        break;
      case '3':
        color = 'danger';
        break;
      default:
        console.log("something went wrong in priorityColors in TodoItem.jsx");
    }
    return color;
  }

  render() {
    let thisTodo;
    if(this.props.editing == true){
      thisTodo = (
        <div>
          <EditTodo 
            initialText={this.props.createTodoText}
            initialPriority={this.props.createTodoPriority}
            id={this.props.id}
            submitEdit={this.props.submitEdit}
          />
        </div>)
    }
    else thisTodo = (
        <li className={`list-group-item-${this.priorityColors(this.props.createTodoPriority)}`}>
          <input type="checkbox" checked={this.props.completed}></input>
          <text>{this.props.createTodoText}</text>
          <button 
            style={{height: '24px'}}
            className="delete-todo btn btn-danger pull-right" 
            onClick={() => this.props.deleteTodo(this.props.id)}>
            <i className="fa fa-trash" style={{height: '100%'}}></i>
          </button>
          <button 
            style={{height: '24px'}}
            onClick={() => this.props.toggleEdit(this.props.id)}
            className={`edit-todo btn btn-info pull-right`}>
            <i className="fa fa-edit" style={{height: '100%'}}></i>
          </button>
        </li>)
    return(thisTodo);
  }
}

export default TodoItem;