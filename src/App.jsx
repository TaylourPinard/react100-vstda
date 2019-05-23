import React, { Component } from 'react';
import ViewTodo from './ViewTodo';
import NewTodo from  './NewTodo';

const INITIAL_STATE = {
  todos: []
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  addTodo(message, priority, completed, id){
    let newTodo = {
      createTodoText: message,
      createTodoPriority: priority,
      completed,
      id,
      editing: false
    }
    this.state.todos.push(newTodo);
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTodo(id){
    let todoList = [...this.state.todos];
    for(let i = 0; i < todoList.length; i++){
      if(todoList[i].id == id){
        todoList.splice(i, 1);
      }
    }
    this.setState({
      todos: todoList
    })
  }

  submitEdit(message, priority, id){
    let todoList = [...this.state.todos];
    for(let i = 0; i < todoList.length; i++){
      if(todoList[i].id == id){
        todoList[i].createTodoText = message;
        todoList[i].createTodoPriority = priority;
        todoList[i].editing = !todoList[i].editing;
      }
      this.setState({
        todos: todoList
      })
    }
  }

  toggleEdit(id){
    let todoList = [...this.state.todos];
    for(let i = 0; i < todoList.length; i++){
      if(todoList[i].id == id){
        todoList[i].editing = !todoList[i].editing;
        this.setState({
          todos: todoList
        });
      }
    }
  }

  render() {
    return (
      <div className='container'>
      <h1 style={{color:"#ffffff"}}>Very Simple Todo App</h1>
      <h3 style={{color:"#ffffff"}}>Track all of the things</h3>
        <div className='row'>
          <div className='col-md-4'>
            <NewTodo addTodo={this.addTodo}/>
          </div>
          <div className='col-md-8'>
            <ViewTodo 
            deleteTodo={this.deleteTodo}
            submitEdit={this.submitEdit} 
            todos={this.state.todos}
            toggleEdit={this.toggleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
