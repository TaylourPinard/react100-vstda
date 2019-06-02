import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      createTodoText: '',
      createTodoPriority: '',
      completed: false,
      id: 0
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(){
  let newid = this.state.id + 1;
  this.setState({id: newid});
  this.props.addTodo(this.state.createTodoText, 
    this.state.createTodoPriority, 
    this.state.completed,
    this.state.id);
  }

  onChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if(name == "create-todo-priority"){
      this.setState({
        createTodoPriority: value
      })
    }
    if(name == "create-todo-text"){
      this.setState({
        createTodoText: value
      })
    }
  }

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <div className="card-title">Add a new Todo</div>
          <div className="form-group">
            <label htmlFor="create-todo-text">I want to...</label>
            <textarea onChange={this.onChange} className="create-todo-text" name="create-todo-text"></textarea>
            <label htmlFor="create-todo-priority">How much of a priority is this?</label>
            <select 
              value={this.state.createTodoPriority}
              name="create-todo-priority"
              className="create-todo-priority" 
              onChange={this.onChange}>
              <option>Select a Priority</option>
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>          
            <button className="create-todo btn btn-success btn-block"
              name="button"
              type="submit"
              onClick={this.onClick}>Add!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTodo;