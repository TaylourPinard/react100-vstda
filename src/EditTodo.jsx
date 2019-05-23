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
    if(e.target.name == 'edit-todo-text'){
      this.setState({
        createTodoText: e.target.value
      });
    }
    if(e.target.name == 'edit-todo-priority'){
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
            <label htmlFor="edit-todo-text">Description</label>
            <textarea onChange={this.onChange} className="edit-todo-text" name="edit-todo-text"></textarea>
            <label htmlFor="edit-todo-priority">Priority</label>
            <select 
              name="edit-todo-priority"
              className="edit-todo-priority" 
              onChange={this.onChange}>
              <option>Select a Priority</option>
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>          
            <button className="edit-todo btn btn-success pull-right"
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