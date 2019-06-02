import React from "react";
import TodoItem from './TodoItem';

const ViewTodo = props => {
  return(
    <div className="card">
      <div className="card-body">
        <div className="card-title">View Todos</div>
        {
          props.todos.map(todo => {
          return(
            <TodoItem
              key={todo.id}
              id={todo.id}
              createTodoText={todo.createTodoText}
              createTodoPriority={todo.createTodoPriority}
              completed={todo.completed}
              deleteTodo={props.deleteTodo}
              submitEdit={props.submitEdit}
              editing={todo.editing}
              toggleEdit={props.toggleEdit}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default ViewTodo;