import React, { useEffect, useState } from "react";
import { getTodos } from "../services/TodoService";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getTodos()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">Todo List</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;