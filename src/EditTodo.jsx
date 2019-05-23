import React, { Component } from 'react';


class EditTodo extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      createTodoPriority: this.props.createTodoPriority,
      createTodoText: this.props.createTodoText
    }
  }

  onChange(e){
    if(e.target.name == 'update-todo-text'){
      this.setState({
        createTodoText: e.target.value
      });
    }
    if(e.target.name == 'update-todo-priority'){
      this.setState({
        createTodoPriority: e.target.value
      });
    }
  }

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="update-todo-text">Description</label>
            <textarea onChange={this.onChange} className="update-todo-text" name="update-todo-text"></textarea>
            <label htmlFor="update-todo-priority">Priority</label>
            <select 
              name="update-todo-priority"
              className="update-todo-priority" 
              onChange={this.onChange}>
              <option>Select a Priority</option>
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>          
            <button className="update-todo btn btn-success pull-right"
              name="button"
              type="submit"
              onClick={() => this.props.submitEdit(this.state.createTodoText, this.state.createTodoPriority, this.props.id)}>Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTodo;